import "../styles/about.css";
import { useState } from "react";

import PAGES from "../utilities/book-pages";

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

	const goToPage = (c) => setCurrent(Math.max(0, Math.min(c, N)));

	// dynamic thickness: more pages = thicker spine
	// const thickness = Math.max(3, Math.round(N * 1.2));
	const thickness = Math.max(12, Math.round(N * 1.2));

	//NOTE Polish the book components

	//* TODO - go over every page and on the inner edge make sure to dynamically change the border radius to make it look like is actually staking the pages

	//* TODO - for smaller screens make the book open downwards instead of sideways(toke keep the same effect of staking you would have to do different rotate: 1 0 0 25deg; for the top and bottom so when they on the top the pages look like they are shorter )

	//* TODO - make the book have a more 3d effect  where is tilted  and looks thicker  (you could also give it an animation that tilts the book as you are changing pages )

	//* TODO - see if it would be posible to have the pages have a slight curve when they are changing this would have to be when they are going left and right (no required)

	//* TODO - as the screen gets smaller you also have to change how the perspective looks like

	//* TODO - for smaller screens make the book open downwards instead of sideways

	//* TODO - for big screens make it like a pamphlet that as you keep going forward it keeps unfolding  (the biggest height should be 600px and width 450px see if you want it bigger )

	// * TODO - i think that there would also need to be a inspect back btn to see the back (it can be integrated in the arrow controls as you keep pressing next it wil flip at the end ) would have to do something similar to the smaller screen stacking but for one or 2 sides depending how you make the pamphlet

	// NOTE - DONE
	//* make the book bigger
	//* see if you can make the book thicker
	//* make the book more visible for when is close
	//* make the book size adapt better to the screen

	return (
		<div className={`about-wrapper ${isVisible ? "show" : ""}`}>
			<div className="about-header">
				<h2 className="about-section-title">About Us</h2>
			</div>

			{/* perspective container */}
			<div className="book-scene">
				<div className="book" style={{ "--c": current, "--n": N }}>
					{PAGES.map((page, i) => (
						<div key={i} className="page" style={{ "--i": i, "--thickness": thickness }}>
							{/* FRONT — clicking advances */}
							<div className="page-front" onClick={() => goToPage(i + 1)}>
								<PageSide data={page.front} />
							</div>

							{/* BACK — clicking goes back */}
							<div className="page-back" onClick={() => goToPage(i)}>
								<PageSide data={page.back} />
							</div>
						</div>
					))}
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
		</div>
	);
}

// import "../styles/about.css";
// import { useState } from "react";
// import { useCarousel } from "../hooks/useCarousel";

// import front from "../assets/banner/Webster-Front.jpg";
// import banner from "../assets/banner/banner-services.png";
// import general from "../assets/general/general-1.png";
// import blankKeys from "../assets/general/blank-keys-on-wall.webp";
// import test from "../assets/general/s-l400.webp";

// export default function About() {
// 	// TODO -  change the font of the about decryption  to be smaller
// 	// TODO -  make the about description container smaller
// 	// TODO - change the class names in the component

// 	const [expanded, setExpanded] = useState(false);

// 	const aboutImages = [
// 		{ src: blankKeys, alt: "Blank keys on wall" },
// 		{ src: general, alt: "General" },
// 		{ src: test, alt: "Services" },
// 		{ src: front, alt: "Webster front" },
// 		{ src: banner, alt: "Services" },
// 	];

// 	const vertical = useCarousel(aboutImages, 3500);

// 	return (
// 		<div>
// 			<div className={`banner-about-container ${!expanded ? "" : "expanded"}`}>
// 				<div className="banner-about-wrapper-container">
// 					<div className="banner-description-container">
// 						<h1>About</h1>

// 						<div className={`banner-description ${!expanded ? "" : "expanded"}`}>
// 							<p>
// 								Webster Lock and Hardware Co. Inc was founded in 1949 by Mike and Ann Miller.
// 								<br />
// 								Today their son, Allan Miller is the Chief Executive Officer of Webster Locksmiths. Allan’s son, David Miller is Vice President of Operations.
// 								<br />
// 								Webster Lock and Hardware is a complete security and security related, distributor and manufacturer. Forty radio-dispatched vehicles are serving the needs of residential and commercial customers throughout the New York metro area.
// 							</p>
// 						</div>
// 						{/*
// 								 add litle pictures (icons) keys , locks other similitar thinks
// 								 and make them move around  like butmp into each other
// 									the banner-description and the btn will be on to op it (z index)
// 								*/}
// 						<div className="banner-about-expand-btn-container">
// 							<button className="banner-about-expand-btn" onClick={() => setExpanded(!expanded)}>
// 								{!expanded ? "🔒 Read more about us" : "🔓 Show less"}
// 							</button>
// 						</div>
// 					</div>

// 					<div className="banner-about-image-container">
// 						<div className="banner-about-image">
// 							<div className="carousel-v">
// 								<div className="carousel-v-track" style={{ transform: `translateY(-${vertical.current * 100}%)` }}>
// 									{aboutImages.map((img, i) => (
// 										<div className="carousel-v-slide" key={i}>
// 											<img src={img.src} alt={img.alt} />
// 										</div>
// 									))}
// 								</div>

// 								{/* arrows */}
// 								<button className="carousel-arrow carousel-arrow-top" onClick={vertical.prev}>
// 									&#8593;
// 								</button>
// 								<button className="carousel-arrow carousel-arrow-bottom" onClick={vertical.next}>
// 									&#8595;
// 								</button>

// 								{/* dots on the side */}
// 								<div className="carousel-dots-v">
// 									{aboutImages.map((_, i) => (
// 										<button key={i} className={`carousel-dot ${vertical.current === i ? "active" : ""}`} onClick={() => vertical.goTo(i)} />
// 									))}
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
