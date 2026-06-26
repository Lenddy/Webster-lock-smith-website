import "../styles/FlipBookVertical.css";
import { useState } from "react";
import PAGES from "../utilities/book-pages";

const N = PAGES.length;

function PageSide({ data }) {
	if (data.type === "cover")
		return (
			<div className="fv-cover">
				<div className="fv-badge">EST. 1949</div>
				<h1 className="fv-title">{data.title}</h1>
				<p className="fv-sub">{data.sub}</p>
				<div className="fv-key">🔑</div>
			</div>
		);
	if (data.type === "closing")
		return (
			<div className="fv-cover fv-closing">
				<h2 className="fv-title">{data.title}</h2>
				<p className="fv-sub">{data.sub}</p>
			</div>
		);
	if (data.type === "image")
		return (
			<div className="fv-image">
				<img src={data.src} alt={data.alt} />
			</div>
		);
	if (data.type === "text")
		return (
			<div className="fv-text">
				<h2 className="fv-heading">{data.heading}</h2>
				<p className="fv-body">{data.body}</p>
			</div>
		);
}

export default function FlipBookVertical() {
	const [current, setCurrent] = useState(0);
	const goTo = (c) => setCurrent(Math.max(0, Math.min(c, N)));
	const thickness = Math.max(12, Math.round(N * 1.2));

	return (
		<div className="fv-wrapper">
			<div className="fv-scene">
				{/*
          .fv-book is the perspective container.
          It is tilted on X so you see top and bottom stacks.
          --c and --n drive all the flip math, same as horizontal book.
        */}
				<div className="fv-book" style={{ "--c": current, "--n": N }}>
					{PAGES.map((page, i) => (
						<div key={i} className="fv-page" style={{ "--i": i, "--thickness": thickness }}>
							{/*
                BOTTOM HALF = front face
                Sits below the spine. Flips UP (rotateX negative)
                when this page is turned.
                transform-origin: top center — folds from the spine upward.
              */}
							<div className="fv-bottom-half" onClick={() => goTo(i + 1)}>
								{/* front face — visible before flip */}
								<div className="fv-face fv-face-front">
									<PageSide data={page.front} />
								</div>
								{/* back face — visible after flip (shows back of THIS page) */}
								<div className="fv-face fv-face-back">
									<PageSide data={page.back} />
								</div>
							</div>

							{/*
                TOP HALF = static revealed area
                Shows the back of the PREVIOUS page once it's been turned.
                This is just a display area — it doesn't animate.
              */}
							<div className="fv-top-half" onClick={() => goTo(i)}>
								<div className="fv-face fv-face-front fv-top-front">
									<PageSide data={page.back} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* spine line sits in the middle visually via CSS */}

			{/* nav */}
			<div className="fv-nav">
				<button className="fv-btn" onClick={() => goTo(current - 1)} disabled={current === 0}>
					‹
				</button>
				<div className="fv-dots">
					{PAGES.map((_, i) => (
						<button key={i} className={`fv-dot ${current > i ? "turned" : ""} ${current === i ? "current" : ""}`} onClick={() => goTo(i)} />
					))}
				</div>
				<button className="fv-btn" onClick={() => goTo(current + 1)} disabled={current === N}>
					›
				</button>
			</div>

			<p className="fv-hint">{current === 0 ? "Click to flip ↑" : `Page ${current} of ${N}`}</p>
		</div>
	);
}

// import "../styles/FlipBookVertical.css";
// import { useState } from "react";
// import PAGES from "../utilities/book-pages";

// // flatten into single sides: [front0, back0, front1, back1, ...]
// const SIDES = PAGES.flatMap((p) => [p.front, p.back]);
// const TOTAL = SIDES.length; // 10

// function SideContent({ data }) {
// 	if (data.type === "cover")
// 		return (
// 			<div className="fv-cover">
// 				<div className="fv-badge">EST. 1949</div>
// 				<h1 className="fv-title">{data.title}</h1>
// 				<p className="fv-sub">{data.sub}</p>
// 				<div className="fv-key">🔑</div>
// 			</div>
// 		);

// 	if (data.type === "closing")
// 		return (
// 			<div className="fv-cover fv-closing">
// 				<h2 className="fv-title">{data.title}</h2>
// 				<p className="fv-sub">{data.sub}</p>
// 			</div>
// 		);

// 	if (data.type === "image")
// 		return (
// 			<div className="fv-image">
// 				<img src={data.src} alt={data.alt} />
// 			</div>
// 		);

// 	if (data.type === "text")
// 		return (
// 			<div className="fv-text">
// 				<h2 className="fv-heading">{data.heading}</h2>
// 				<p className="fv-body">{data.body}</p>
// 			</div>
// 		);
// }

// // NOTE the pages just cycle  over the flip book (the pages are suppose to be doble sided)
// // NOTE there is not page turning
// // NOTE there is not touch to turn the pages
// // NOTE the bent is suppose to be in the middle with the bottom tilting in at the top and the top tilting in at the bottom

// export default function FlipBookVertical() {
// 	const [current, setCurrent] = useState(0);

// 	const goTo = (c) => setCurrent(Math.max(0, Math.min(c, TOTAL - 1)));

// 	// top half: previous side (already revealed)
// 	const topData = current > 0 ? SIDES[current - 1] : null;
// 	// bottom half: current side (about to flip up)
// 	const bottomData = SIDES[current];
// 	// the page folding up: same as bottomData, shown during animation
// 	const flippingData = SIDES[current];

// 	return (
// 		<div className="fv-wrapper">
// 			<div className="fv-scene">
// 				<div className="fv-book">
// 					{/* TOP HALF — revealed (back of flipped page) */}
// 					<div className="fv-half fv-top">{topData ? <SideContent data={topData} /> : <div className="fv-empty" />}</div>

// 					{/* SPINE LINE */}
// 					<div className="fv-spine" />

// 					{/* BOTTOM HALF — current page front, folds up on click */}
// 					<div className="fv-half fv-bottom" onClick={() => goTo(current + 1)} style={{ cursor: current < TOTAL - 1 ? "pointer" : "default" }}>
// 						<SideContent data={bottomData} />
// 					</div>
// 				</div>
// 			</div>

// 			{/* nav */}
// 			<div className="fv-nav">
// 				<button className="fv-btn" onClick={() => goTo(current - 1)} disabled={current === 0}>
// 					‹
// 				</button>
// 				<span className="fv-count">
// 					{current + 1} / {TOTAL}
// 				</span>
// 				<button className="fv-btn" onClick={() => goTo(current + 1)} disabled={current === TOTAL - 1}>
// 					›
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// Got it — so the forwards on the animation locks the final keyframe's rotate, overriding any CSS override including media queries. That's the real blocker for the CSS-only approach.

// The cleanest solution is to use FlipBookVertical.jsx as a separate component (which you already have), and build the flip animation directly into it — no conflict with book-fall at all.

// The component already has the right layout (top/bottom halves + spine). What it's missing is:

// Double-sided pages — each "leaf" has a front and back, not 10 single sides
// Flip animation — bottom half rotates up 180° on X axis, revealing the back face
// Stacking illusion — pages peek out at top/bottom edges
// Here's the updated FlipBookVertical.jsx:
