// ImageCarousel.jsx
import "../styles/imageCarousel.css";
import { useState, useEffect, useRef } from "react";

const THUMB_GAP = 175;
const MAX_VISIBLE_THUMBS = 3;

function getSlideStyle(positionIndex, image) {
	const style = { backgroundImage: image ? `url(${image})` : undefined };

	if (positionIndex <= 1) {
		// hidden (0) and active (1) share the exact same full-size box —
		// that's what makes hidden -> active swap instant/seamless
		return Object.assign(style, {
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			transform: "translate(0, 0)",
			zIndex: positionIndex === 1 ? 2 : 1,
		});
	}

	const thumbSlot = positionIndex - 2;
	const cappedSlot = Math.min(thumbSlot, MAX_VISIBLE_THUMBS);
	return Object.assign(style, {
		top: "50%",
		left: `calc(55% + ${cappedSlot * THUMB_GAP}px)`,
		width: 160,
		height: 200,
		transform: "translate(0, -50%)",
		zIndex: 3, // thumbs always stay above active/hidden, both directions
		opacity: thumbSlot < MAX_VISIBLE_THUMBS ? 1 : 0,
	});
}

export default function ImageCarousel({ slides: initialSlides, isOpen, intervalMs = 4000 }) {
	const [items, setItems] = useState(initialSlides);
	const [isPaused, setIsPaused] = useState(false);
	// DOM order is fixed at mount and never changes again — only each
	// slide's inline style changes as it rotates through roles. That's
	// what makes CSS transitions animate reliably in both directions.
	const orderRef = useRef(initialSlides.map((s) => s.id));
	const count = items.length;

	useEffect(() => {
		setItems(initialSlides);
		orderRef.current = initialSlides.map((s) => s.id);
	}, [initialSlides]);

	const handleNext = () => {
		setItems((prev) => {
			const [first, ...rest] = prev;
			return [...rest, first];
		});
	};

	const handlePrev = () => {
		setItems((prev) => {
			const last = prev[prev.length - 1];
			return [last, ...prev.slice(0, -1)];
		});
	};

	useEffect(() => {
		if (!isOpen || isPaused || count <= 1) return;
		const id = setInterval(handleNext, intervalMs);
		return () => clearInterval(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen, isPaused, count, intervalMs]);

	if (count === 0) return null;

	const byId = new Map(items.map((s, idx) => [s.id, { slide: s, positionIndex: idx }]));

	return (
		<div className="carousel">
			<div className="carousel-slide">
				{orderRef.current.map((id) => {
					const entry = byId.get(id);
					if (!entry) return null;
					const { slide, positionIndex } = entry;
					const effectiveIndex = count === 1 ? 1 : positionIndex;
					const role = effectiveIndex === 0 ? "hidden" : effectiveIndex === 1 ? "active" : "thumb";
					// const role = true;
					const style = getSlideStyle(effectiveIndex, slide.image);

					return (
						<div key={slide.id} className={`carousel-item is-${role}`} style={style}>
							{role === "active" && (
								<div className="carousel-content" key={slide.id}>
									{slide.title && <div className="carousel-name">{slide.title}</div>}

									{slide.link && (
										<a className="carousel-see-more" href={slide.link} target="_blank" rel="noopener noreferrer">
											<button type="button">See more</button>
										</a>
									)}
								</div>
							)}
						</div>
					);
				})}
			</div>

			{count > 1 && (
				<div className="carousel-controls">
					<button type="button" className="carousel-prev" onClick={handlePrev}>
						◁
					</button>
					<button type="button" className="carousel-pause" onClick={() => setIsPaused((p) => !p)} aria-label={isPaused ? "Play" : "Pause"}>
						{isPaused ? "▶" : "⏸"}
					</button>
					<button type="button" className="carousel-next" onClick={handleNext}>
						▷
					</button>
				</div>
			)}
		</div>
	);
}
