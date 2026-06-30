import "../styles/about.css";
import { useState, useEffect, useRef } from "react";

import PAGES from "../utilities/book-pages";

import FlipBookVertical from "./FlipBookVertical";

// add ref to the wrapper div:
{
	/* <div className="book-scene-scroll" ref={scrollRef}></div> */
}

const N = PAGES.length; // number of pages

function PageSide({ data }) {
	if (data.type === "cover")
		return (
			<div className="book-cover-side">
				<div className="book-cover-badge">EST. 1949</div>
				<h1 className="book-cover-title">{data.title}</h1>
				<p className="book-cover-sub">{data.sub}</p>
				<div className="book-cover-key">🔑</div>
			</div>
		);

	if (data.type === "closing")
		return (
			<div className="book-cover-side book-closing">
				<h2 className="book-cover-title">{data.title}</h2>
				<p className="book-cover-sub">{data.sub}</p>
			</div>
		);

	if (data.type === "image")
		return (
			<div className="book-image-side">
				<img src={data.src} alt={data.alt} />
			</div>
		);

	if (data.type === "text")
		return (
			<div className="book-text-side">
				<h2 className="book-page-heading">{data.heading}</h2>
				<p className="book-page-body">{data.body}</p>
			</div>
		);
}

export default function About({ isVisible }) {
	const [current, setCurrent] = useState(0); // --c value
	const [flippingIndex, setFlippingIndex] = useState(); // --c value

	// const goToPage = (c) => setCurrent(Math.max(0, Math.min(c, N)));

	const goToPage = (c) => {
		const targetIndex = c > current ? current : c; // the page actually flipping
		setFlippingIndex(targetIndex);
		setCurrent(Math.max(0, Math.min(c, N)));
		setTimeout(() => setFlippingIndex(null), 900); // matches your 0.9s transition
	};

	// dynamic thickness: more pages = thicker spine
	// const thickness = Math.max(3, Math.round(N * 1.2));
	const thickness = Math.max(12, Math.round(N * 1.2));

	// start/stop timer
	// const startTimer = () => {
	// 	let thickness;
	// 	setTimeout(() => {
	// 		thickness = Math.max(10, Math.round(N * 1.2));
	// 	}, 1500);
	// 	return thickness;
	// };

	// const thickness = Math.max(10, Math.round(N * 1.2));
	// console.log("this is the thickness", thickness);
	console.log("THIS IS IS VISIBLE", isVisible);

	//NOTE Polish the book components

	// TODO make the pages have round edges on the outside  but not the covers

	// MAKE THE BOOK HAVE THIS rotate /* rotate: 10 -4 1 25deg; */ when it is in the front close  and

	//* TODO - see if you could make the inner part(spine) to be tilted back to make it look more like a book

	//* TODO - you could also give it an animation that tilts the book as you are changing pages

	//* TODO - see if it would be posible to have the pages have a slight curve when they are changing this would have to be when they are going left and right (not required)

	// NOTE for smaller viewports
	//* TODO - for smaller screens make the book open downwards instead of sideways(toke keep the same effect of staking you would have to do different rotate: 1 0 0 25deg; for the top and bottom so when they on the top the pages look like they are shorter )

	// NOTE for bigger viewports
	//* TODO - for big screens make it like a pamphlet that as you keep going forward it keeps unfolding  (the biggest height should be 600px and width 450px see if you want it bigger )

	// * TODO - i think that there would also need to be a inspect back btn to see the back (it can be integrated in the arrow controls as you keep pressing next it wil flip at the end ) would have to do something similar to the smaller screen stacking but for one or 2 sides depending how you make the pamphlet

	// TODO you can use this rotate for the flip up book rotate: -50 10 -1 25deg;

	// NOTE - DONE
	//* make the book bigger
	//* see if you can make the book thicker
	//* make the book more visible for when is close
	//* make the book size adapt better to the screen
	//* as the screen gets smaller you also have to change how the perspective looks like
	//* go over every page and on the inner edge make sure to dynamically change the border radius to make it look like is actually staking the pages

	// NOTE - change later
	// the page indicate when the is close (front of the book) have a extra circle page 0/6 or have not circle at al

	// NOTE - is there a way to make the book be above the container ? be still have it in the container  (z-index ? position )

	// const isVertical = window.innerWidth <= 400;

	// <div className="book-scene-scroll">
	// 	<div className="book-scene">
	// 		<div className="book" style={{ "--c": current, "--n": N }}>
	// 			{/* pages */}
	// 		</div>
	// 	</div>
	// </div>;

	// const isVertical = window.innerWidth <= 440;

	// for now i would like to put the flip book for later so i would like to continue with it later

	// so i would like to
	// i have to make the scroll  be able to scroll a little more to the left (it should allow me to scroll to the left and the right the same amount so that i can see the left and the right page the same amount)

	// add ref to scroll container
	// const scrollRef = useRef(null);

	// useEffect(() => {
	// 	if (scrollRef.current) {
	// 		const el = scrollRef.current;
	// 		// scroll to center
	// 		el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
	// 	}
	// }, []);

	return (
		//  ref={scrollRef}
		<div className="book-scene-scroll">
			<div className={`about-wrapper ${isVisible ? "show" : ""}`}>
				<div className="about-header">
					<h2 className="about-section-title">About Us</h2>
				</div>

				{/* perspective container */}
				{/* {isVertical ? (
				<FlipBookVertical />
			) : ( */}
				<>
					<div className="book-scene">
						<div className="book" style={{ "--c": current, "--n": N }}>
							{PAGES.map((page, i) => {
								// how far through the book we are (0 to N)
								const c = current;

								// left stack (page-back): 16 → 22 → 30 → 45 as c increases
								const backStops = [23, 30, 32, 33];
								const backRadius = backStops[Math.min(c, backStops.length - 1)];

								// right stack (page-front): 35 → 30 → 25 → 15 as c increases
								const frontStops = [33, 32, 30, 22];
								const frontRadius = frontStops[Math.min(c, frontStops.length - 1)];

								return (
									<div
										key={i}
										className={`page ${flippingIndex === i ? "is-flipping" : ""}`}
										// className="page"
										style={{ "--i": i, "--thickness": thickness }}>
										<div className="page-front" style={{ borderRadius: page.front.type === "cover" ? "10px  10px  5px  10px" : `${frontRadius}px 8px 8px ${frontRadius * 0.4}px` }} onClick={() => goToPage(i + 1)}>
											{/* <div
												className="page-front"
												style={{
													borderRadius: isVertical ? `8px 8px ${frontRadius}px ${frontRadius}px` : page.front.type === "cover" ? "10px 10px 5px 10px" : `${frontRadius}px 8px 8px ${frontRadius * 0.4}px`,
												}}
												onClick={() => goToPage(i + 1)}> */}
											<PageSide data={page.front} />

											{/* {flippingIndex === i && page.front.type !== "cover" ? <CurveOverlay data={page.front} /> : <PageSide data={page.front} />} */}
										</div>

										<div
											className="page-back"
											style={{
												borderRadius: page.back.type === "closing" ? "10px  10px  5px  10px" : `8px ${backRadius}px ${backRadius * 0.25}px 8px`,
											}}
											onClick={() => goToPage(i)}>
											{/* <div
												className="page-back"
												style={{
													borderRadius: isVertical ? `${backRadius}px ${backRadius}px 8px 8px` : page.back.type === "closing" ? "10px 10px 5px 10px" : `8px ${backRadius}px ${backRadius * 0.25}px 8px`,
												}}
												onClick={() => goToPage(i)}> */}

											<PageSide data={page.back} />

											{/* {flippingIndex === i && page.back.type !== "closing" ? <CurveOverlay data={page.back} /> : <PageSide data={page.back} />} */}
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* navigation dots + arrows */}
					<div className="book-nav">
						<button className="book-nav-btn" onClick={() => goToPage(current - 1)} disabled={current === 0} aria-label="Previous page">
							‹
						</button>

						<div className="book-nav-dots">
							{PAGES.map((_, i) => (
								<button key={i} className={`book-nav-dot ${current > i ? "turned" : ""} ${current === i ? "current" : ""}`} onClick={() => goToPage(i)} aria-label={`Go to page ${i + 1}`} />
							))}
						</div>

						<button className="book-nav-btn" onClick={() => goToPage(current + 1)} disabled={current === N} aria-label="Next page">
							›
						</button>
					</div>

					<p className="book-nav-hint">{current === 0 ? "Click the page to turn →" : `Page ${current} of ${N}`}</p>
				</>
				{/* )} */}
			</div>
		</div>
	);
}
