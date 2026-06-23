import "../styles/gallery.css";
import { sections } from "../utilities/gallery-sections";
import { useState, useEffect, useRef, useMemo } from "react";

function Gallery({ isVisible }) {
	const [showGrid, setShowGrid] = useState(false);
	const [offset, setOffset] = useState(0);
	const [animating, setAnimating] = useState(false);
	const timerRef = useRef(null);

	// ── outside component — stable, never re-created
	const ROWS = 3;
	// const CYCLE_MS = 2500;
	const CYCLE_MS = 1700;
	const COL_DELAY = 80;
	const ROW_DELAY = 60;
	const ANIM_MS = 600;

	const allLogos = sections.flatMap((s) => s.images);

	// responsive cols based on width
	function getCols(width) {
		if (width < 480) return 2;
		if (width < 768) return 3;
		if (width < 1024) return 4;
		return 5;
	}

	const [cols, setCols] = useState(() => getCols(window.innerWidth));
	const total = allLogos.length;

	// update cols on resize
	useEffect(() => {
		const onResize = () => setCols(getCols(window.innerWidth));
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	// reset offset when cols changes so no out-of-bounds index
	useEffect(() => {
		setOffset(0);
	}, [cols]);

	const getLogoAt = (i) => allLogos[((i % total) + total) % total];

	// build visible grid with current cols
	const visibleGrid = useMemo(() => {
		const grid = [];
		for (let row = -1; row < ROWS; row++) {
			const rowLogos = [];
			for (let col = 0; col < cols; col++) {
				rowLogos.push(getLogoAt(offset + row * cols + col));
			}
			grid.push(rowLogos);
		}
		return grid;
	}, [offset, cols, total, getLogoAt]);

	// start/stop timer
	const startTimer = () => {
		clearInterval(timerRef.current);
		if (showGrid) return;
		timerRef.current = setInterval(() => {
			setAnimating(true);
			setTimeout(
				() => {
					setOffset((prev) => (prev - cols + total) % total);
					setAnimating(false);
				},
				ANIM_MS + COL_DELAY * (cols - 1) + ROW_DELAY * (ROWS - 1) + 50
			);
		}, CYCLE_MS);
	};

	useEffect(() => {
		startTimer();
		return () => clearInterval(timerRef.current);
	}, [showGrid, cols, total]);

	const pause = () => clearInterval(timerRef.current);
	const resume = () => startTimer();

	return (
		<div className={`gallery-wrapper ${isVisible ? "show" : ""}`}>
			<div className="gallery-header">
				<h2 className="gallery-main-title">Our Vendors</h2>
				<button className="gallery-toggle-btn" onClick={() => setShowGrid(!showGrid)}>
					{showGrid ? "Show Carousel ▲" : "Browse All Vendors ▼"}
				</button>
			</div>

			{/* ── CAROUSEL ── */}
			{/* <div className={`gallery-conveyor ${showGrid ? "gallery-mode-hidden" : ""}`} style={{ "--card-h": "150px", "--gap": "8px" }} onMouseEnter={pause} onMouseLeave={resume}> */}

			<div className={`gallery-conveyor ${showGrid ? "gallery-mode-hidden" : ""}`} style={{ "--card-h": "150px", "--gap": "8px", display: showGrid ? "none" : "flex" }} onMouseEnter={pause} onMouseLeave={resume}>
				{Array.from({ length: ROWS }).map((_, rowIdx) => (
					<div
						key={rowIdx}
						className="conveyor-row-wrapper"
						style={{ "--cols": cols }} // ← pass cols as CSS var
					>
						{Array.from({ length: cols }).map((_, colIdx) => {
							const currentLogo = visibleGrid[rowIdx + 1][colIdx];
							const incomingLogo = visibleGrid[rowIdx][colIdx];
							const delay = colIdx * COL_DELAY + rowIdx * ROW_DELAY;

							return (
								<div key={colIdx} className="conveyor-col-slot">
									<div
										className={`conveyor-card-wrap conveyor-card-incoming ${animating ? "conveyor-animating" : ""}`}
										style={{
											"--delay": `${delay}ms`,
											"--anim-ms": `${ANIM_MS}ms`,
										}}>
										<div className="conveyor-card">
											<img src={incomingLogo.src} alt={incomingLogo.alt} />
										</div>
									</div>

									<div
										className={`conveyor-card-wrap conveyor-card-current ${animating ? "conveyor-animating" : ""}`}
										style={{
											"--delay": `${delay}ms`,
											"--anim-ms": `${ANIM_MS}ms`,
										}}>
										<div className="conveyor-card">
											<img src={currentLogo.src} alt={currentLogo.alt} />
										</div>
									</div>
								</div>
							);
						})}
					</div>
				))}
			</div>

			{/* ── GRID ── */}
			<div className={`gallery-grid-section ${showGrid ? "" : "gallery-mode-hidden"}`}>
				<div className="gallery-container">
					<div className="gallery-expanded-container">
						{sections.map((section) => (
							<section key={section.name} className="section-row">
								<div className="column-container">
									<h3 className="column-title">{section.name}</h3>
								</div>
								<div className="images-scroll-wrapper">
									<div className="images-area">
										{section.images.map((img, i) => (
											<div className="image-wrapper" key={i}>
												<img src={img.src} alt={img.alt} />
											</div>
										))}
									</div>
								</div>
							</section>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
