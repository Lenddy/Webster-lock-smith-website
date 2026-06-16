import "../styles/gallery.css";
import { sections } from "../utilities/gallery-sections";
import { useState, useEffect, useRef } from "react";

// This is a JS-driven carousel since the stagger timing and conveyor belt logic can't be done cleanly in pure CSS. Here's the full implementation:
// The core algorithm:
// allLogos = flat array of every logo
// grid = COLS × ROWS visible slots
// offset = index into allLogos where the top-left slot starts
// every N seconds: offset += COLS  (shift one full row worth)
// stagger delay per cell = col * COL_DELAY + row * ROW_DELAY

// NOTE //* - The key thing that makes the stagger work is --delay per cell which is col * COL_DELAY + row * ROW_DELAY. Each cell gets its own delay before its animation starts, creating the left-to-right wave, and within each column the top row fires before the bottom rows.

// NOTE //* - The incoming row (rowIdx === -1) sits in grid-row: 0 — which with overflow: hidden on the parent is clipped above the visible area. When animating it slides down into grid-row: 1 while all other rows slide down one slot, and the bottom row slides out of view below.

// NOTE //* - One thing to check — your sections data needs enough logos to fill at least one full grid (COLS × (ROWS + 1) = 20 logos minimum for the defaults). If you have fewer, the getLogoAt wrapping handles it by cycling, but you may see duplicates in the same frame. Adjust COLS and ROWS to match how many logos you actually have.import { useState, useEffect, useRef } from "react";

// ── config — tweak these to your liking
const COLS = 5; // logos per row
const ROWS = 3; // visible rows
const CYCLE_MS = 2500; // ms between row shifts
// const CYCLE_MS = 2000000; // ms between row shifts
const COL_DELAY = 80; // ms stagger between columns
// const COL_DELAY = 2000000; // ms stagger between columns
const ROW_DELAY = 60; // ms stagger between rows within a column
// const ROW_DELAY = 2000000; // ms stagger between rows within a column
const ANIM_MS = 600; // ms for the slide animation itself
// const ANIM_MS = 2000000000; // ms for the slide animation itself

// flatten all logos from every section into one array
const allLogos = sections.flatMap((s) => s.images);

function Gallery({ isVisible }) {
	const [showGrid, setShowGrid] = useState(false);
	const [offset, setOffset] = useState(0); // top-left index into allLogos
	const [animating, setAnimating] = useState(false);
	const [exiting, setExiting] = useState(false); // true = rows sliding down-out
	const timerRef = useRef(null);

	const total = allLogos.length;

	// wrap index safely
	const getLogoAt = (i) => allLogos[((i % total) + total) % total];

	// build the visible grid — ROWS+1 rows so we can slide the extra row in from top
	// row index -1 = incoming row (above viewport, slides down into row 0)
	const visibleGrid = [];
	for (let row = -1; row < ROWS; row++) {
		const rowLogos = [];
		for (let col = 0; col < COLS; col++) {
			rowLogos.push(getLogoAt(offset + row * COLS + col));
		}
		visibleGrid.push(rowLogos);
	}

	// cycle timer
	useEffect(() => {
		if (showGrid) return;
		timerRef.current = setInterval(() => {
			// 1. trigger exit animation (rows shift down)
			setAnimating(true);
			setExiting(true);

			// 2. after animation, update offset and reset
			setTimeout(
				() => {
					setOffset((prev) => (prev - COLS + total) % total);
					setAnimating(false);
					setExiting(false);
				},
				ANIM_MS + COL_DELAY * (COLS - 1) + ROW_DELAY * (ROWS - 1) + 50
			);
		}, CYCLE_MS);

		return () => clearInterval(timerRef.current);
	}, [showGrid, total]);

	// pause on hover
	const pause = () => clearInterval(timerRef.current);
	const resume = () => {
		if (showGrid) return;
		timerRef.current = setInterval(() => {
			setAnimating(true);
			setExiting(true);
			setTimeout(
				() => {
					setOffset((prev) => (prev - COLS + total) % total);
					setAnimating(false);
					setExiting(false);
				},
				ANIM_MS + COL_DELAY * (COLS - 1) + ROW_DELAY * (ROWS - 1) + 50
			);
		}, CYCLE_MS);
	};

	return (
		<div className={`gallery-wrapper ${isVisible ? "show" : ""}`}>
			{/* header */}
			<div className="gallery-header">
				<h2 className="gallery-main-title">Our Vendors</h2>
				<button className="gallery-toggle-btn" onClick={() => setShowGrid(!showGrid)}>
					{showGrid ? "Show Carousel ▲" : "Browse All Vendors ▼"}
				</button>
			</div>

			{/* ── CAROUSEL ── */}

			<div
				className={`gallery-conveyor ${showGrid ? "gallery-mode-hidden" : ""}`}
				style={{
					"--card-h": "150px",
					"--gap": "8px",
					display: showGrid ? "none" : "flex",
				}}
				onMouseEnter={pause}
				onMouseLeave={resume}>
				{/* render ROWS wrappers — each clips one visible row */}
				{Array.from({ length: ROWS }).map((_, rowIdx) => (
					<div key={rowIdx} className="conveyor-row-wrapper">
						{/* each wrapper holds 2 rows: the incoming (above) and current */}
						{/* incoming row for this slot = rowIdx - 1 in visibleGrid */}
						{Array.from({ length: COLS }).map((_, colIdx) => {
							// current logo for this cell
							const currentLogo = visibleGrid[rowIdx + 1][colIdx]; // +1 because row -1 is index 0
							// incoming logo sliding in from above
							const incomingLogo = visibleGrid[rowIdx][colIdx];

							const delay = colIdx * COL_DELAY + rowIdx * ROW_DELAY;

							return (
								<div key={colIdx} className="conveyor-col-slot">
									{/* incoming card — starts above, slides down */}
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

									{/* current card — starts in place, slides down and out */}
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

			{/* ── GRID (existing layout) ── */}
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

// <div
// 	className={`gallery-conveyor ${showGrid ? "gallery-mode-hidden" : ""}`}
// 	style={{
// 		"--rows": ROWS,
// 		"--card-h": "100px" /* must match conveyor-card height */,
// 		"--gap": "8px",
// 		// "--pad": "8px",
// 	}}
// 	onMouseEnter={pause}
// 	onMouseLeave={resume}>
// 	<div className="gallery-conveyor-clip">
// 		<div className="gallery-conveyor-grid">
// 			{visibleGrid.map((row, rowIdx) =>
// 				row.map((logo, colIdx) => {
// 					const delay = colIdx * COL_DELAY + Math.max(0, rowIdx) * ROW_DELAY;
// 					const isIncoming = rowIdx === -1;

// 					return (
// 						<div
// 							key={`${rowIdx}-${colIdx}`}
// 							className={`
// 								conveyor-cell
// 								${animating ? "conveyor-animating" : ""}
// 								${isIncoming ? "conveyor-incoming" : ""}
// 							`}
// 							style={{
// 								"--col": colIdx,
// 								"--row": rowIdx + 1,
// 								"--delay": `${delay}ms`,
// 								"--anim-ms": `${ANIM_MS}ms`,
// 							}}>
// 							<div className="conveyor-card">
// 								<img src={logo.src} alt={logo.alt} />
// 							</div>
// 						</div>
// 					);
// 				})
// 			)}
// 		</div>
// 	</div>
// </div>

// old 2 or 3
// <div className={`gallery-wrapper ${isVisible ? "show" : ""}`}>
// 	{/* header */}
// 	<div className="gallery-header">
// 		<h2 className="gallery-main-title">Our Vendors</h2>
// 		<button className="gallery-toggle-btn" onClick={() => setShowGrid(!showGrid)}>
// 			{showGrid ? "Show Carousel ▲" : "Browse All Vendors ▼"}
// 		</button>
// 	</div>

// 	{/* ── CAROUSEL ── */}
// 	<div className={`gallery-conveyor ${showGrid ? "gallery-mode-hidden" : ""}`} style={{ "--rows": ROWS }} onMouseEnter={pause} onMouseLeave={resume}>
// 		{/* clip wrapper — only this clips, not the outer border */}
// 		<div className="gallery-conveyor-clip">
// 			<div className="gallery-conveyor-grid">
// 				{visibleGrid.map((row, rowIdx) =>
// 					row.map((logo, colIdx) => {
// 						const delay = colIdx * COL_DELAY + Math.max(0, rowIdx) * ROW_DELAY;
// 						const isIncoming = rowIdx === -1;

// 						return (
// 							<div
// 								key={`${rowIdx}-${colIdx}`}
// 								className={`
// 				conveyor-cell
// 				${animating ? "conveyor-animating" : ""}
// 				${isIncoming ? "conveyor-incoming" : ""}
// 			`}
// 								style={{
// 									"--col": colIdx,
// 									"--row": rowIdx + 1,
// 									"--delay": `${delay}ms`,
// 									"--anim-ms": `${ANIM_MS}ms`,
// 								}}>
// 								<div className="conveyor-card">
// 									<img src={logo.src} alt={logo.alt} />
// 								</div>
// 							</div>
// 						);
// 					})
// 				)}
// 			</div>
// 		</div>
// 	</div>

// {/* ── CAROUSEL ── */}
// <div className={`gallery-conveyor ${showGrid ? "gallery-mode-hidden" : ""}`} onMouseEnter={pause} onMouseLeave={resume}>
// 	<div className="gallery-conveyor-grid">
// 		{visibleGrid.map((row, rowIdx) =>
// 			row.map((logo, colIdx) => {
// 				// stagger delay: left columns start first, top rows start first
// 				const delay = colIdx * COL_DELAY + Math.max(0, rowIdx) * ROW_DELAY;
// 				// rowIdx -1 = incoming row from top
// 				const isIncoming = rowIdx === -1;
// 				const isExiting = rowIdx === ROWS - 1 && animating;

// 				return (
// 					<div
// 						key={`${rowIdx}-${colIdx}`}
// 						// key={`${logo.alt}-${rowIdx}-${colIdx}`}

// 						className={`
// 							conveyor-cell
// 							${animating ? "conveyor-animating" : ""}
// 							${isIncoming ? "conveyor-incoming" : ""}
// 						`}
// 						style={{
// 							"--col": colIdx,
// 							"--row": rowIdx + 1, // +1 so incoming row is row 0 in grid
// 							"--delay": `${delay}ms`,
// 							"--anim-ms": `${ANIM_MS}ms`,
// 						}}>
// 						<div className="conveyor-card">
// 							{/* only problem that i find with it is that when the new card is coming in from the top the is a big gap or pushes the old  (row one) and takes a time for the images(section ) to be filled up (in other words is empty and then the images pop up  ) it has the heigh it takes the space but is just empty and then they just pop  it should be a consistent part from the top to the top to the bottom  across all rows */}

// 							<img src={logo.src} alt={logo.alt} />
// 						</div>
// 					</div>
// 				);
// 			})
// 		)}
// 	</div>
// </div>

//! old

// import "../styles/gallery.css";
// import { sections } from "../utilities/gallery-sections";
// import Logo from "../assets/WebsterSiteLogo.png";
// import Hes from "../assets/lock-company-logos/hes.png";
// import Falcon from "../assets/lock-company-logos/falcon.png";
// import Folger from "../assets/lock-company-logos/folger.png";
// import { useCarousel } from "../hooks/useCarousel";

// function Gallery() {
// 	// make it like a carousel
// 	// that has 2 lines one going left the other going right

// 	// and to also have a btn that when is click it expands  to be a grid showing all the companies and separating them by section (some will be in multiple section )

// 	// separate the companies base on what they do (locks,  ELECTRIC STRIKES & MAGNETIC LOCKS , DOOR CLOSERS , PANIC BAR HARDWARE & EXIT DEVICES , DECORATIVE HARDWARE , DOOR ACCESSORIES)
// 	// this is and idea on how it would look like
// 	// https://mr-locks.com/manufacturers/

// 	// but see if you want to put it like (left side is a section that is vertical that container the section name and the right side is a longer horizontally segment that will have it own grids showing the brands)
// 	// go see excalidraw concept

// 	// from the 2 line carousel you can make an animation of the carousel  leaving  to the top and showing the grid caming from the bottom

// 	// for the grid you have to make a container that will  have ta (column container on the left (this will hold the names of the sections)) and on the right they will be rows (this will be where the images live)

// 	// i wold like to get this one with grid if posible

// 	// fix the remaining part of the grid later

// 	// make a Carousel like this

// 	// https://www.framer.com/marketplace/components/staggered-carousel/

// 	// TODO - make a staggered carousel that will be rotating from left to right with the images coming from the top and leaving at the bottom ,  in smaller screens it will be vertical , there will also be a btns to display my current gallery or extended version where it will show  all the categories

// 	return (
// 		<div>
// 			<h2>Our Vendors</h2>

// 			<div className="gallery-container">
// 				<div className="gallery-expanded-container">
// 					{sections.map((section) => (
// 						<section key={section.name} className="section-row">
// 							<div className="column-container">
// 								<h3 className="column-title">{section.name}</h3>
// 							</div>

// 							{/* scroll wrapper — this constrains and clips */}
// 							<div className="images-scroll-wrapper">
// 								<div className="images-area">
// 									{section.images.map((img, i) => (
// 										<div className="image-wrapper" key={i}>
// 											<img src={img.src} alt={img.alt} />
// 											{/* <img src={Folger} alt={img.alt} /> */}
// 											{/* <img src={"../assets/lock-company-logos/falcon.png"} alt={img.alt} /> */}
// 											{/* <img src="../" alt={img.alt} /> */}
// 										</div>
// 									))}
// 								</div>
// 							</div>
// 						</section>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Gallery;
