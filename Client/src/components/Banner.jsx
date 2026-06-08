import "../styles/banner.css";
import front from "../assets/banner/Webster-Front.jpg";
import banner from "../assets/banner/banner-services.png";
import general from "../assets/general/general-1.png";
import blankkeys from "../assets/general/blank-keys-on-wall.webp";
import test from "../assets/general/s-l400.webp";
import { useState, useRef, useCallback, useEffect } from "react";

// random angle per image — generated once, stable across renders
const bannerImages = [
	{ src: front, alt: "Webster front", title: "Since 1949", sub: "Trusted security" },
	{ src: banner, alt: "Services banner", title: "Full Service", sub: "Lock & security solutions" },
	{ src: general, alt: "General", title: "Residential", sub: "Home locksmith services" },
	{ src: blankkeys, alt: "Blank keys", title: "Key Cutting", sub: "All key types" },
	{ src: test, alt: "Services", title: "Commercial", sub: "Business security" },
].map((item) => ({
	...item,
	angle: `${(Math.random() * 20 - 10).toFixed(2)}deg`,
}));

const N = bannerImages.length;

function Banner() {
	const [expanded, setExpanded] = useState(false);
	const sectionRef = useRef(null);
	const kRef = useRef(0);
	const timerRef = useRef(null);

	const goTo = useCallback((next) => {
		kRef.current = ((next % N) + N) % N;
		sectionRef.current?.style.setProperty("--k", kRef.current);
	}, []);

	const next = useCallback(() => goTo(kRef.current + 1), [goTo]);
	const prev = useCallback(() => goTo(kRef.current - 1), [goTo]);

	// auto-play
	useEffect(() => {
		timerRef.current = setInterval(next, 3500);
		return () => clearInterval(timerRef.current);
	}, [next]);

	const pauseAuto = () => clearInterval(timerRef.current);
	const resumeAuto = () => {
		timerRef.current = setInterval(next, 3500);
	};

	return (
		<div className="banner-container">
			<div className="banner-title">
				<h1>
					Webster Security <span>Services</span>
				</h1>
			</div>

			<div className="banner-image-container">
				<div className="banner-image">
					{/* stack carousel replaces carousel-h */}
					<section ref={sectionRef} className="stack-carousel" style={{ "--n": N, "--k": 0 }} onMouseEnter={pauseAuto} onMouseLeave={resumeAuto}>
						{bannerImages.map((img, i) => (
							<article key={i} className="stack-card" style={{ "--i": i, "--a": img.angle }}>
								<h2 className="stack-title">{img.title}</h2>
								<em className="stack-sub">{img.sub}</em>
								<img src={img.src} alt={img.alt} className="stack-img" />
							</article>
						))}

						<div className="stack-controls">
							<button className="stack-btn" aria-label="previous" onClick={prev} />
							<button className="stack-btn stack-btn--next" aria-label="next" onClick={next} />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Banner;

// import "../styles/banner.css";
// import front from "../assets/banner/Webster-Front.jpg";
// import banner from "../assets/banner/banner-services.png";
// import general from "../assets/general/general-1.png";
// // import general from "../assets/general/general-1.webp";
// // import blankkeys from "../assets/general/blank-keys-on-wall.png";
// import blankkeys from "../assets/general/blank-keys-on-wall.webp";
// import test from "../assets/general/s-l400.webp";

// import { useState, useEffect, useRef } from "react";

// import { useCarousel } from "../hooks/useCarousel";

// function Banner() {
// 	/*
// 	//TODO -
// 	the sizes of the section bellow the navbar  are a little smaller thanks to the scroll bar (the scroll bar will made smaller and change to be position fix or relative  so that it does not matter the size of it )

// 	// TODO
// 		the banner can be a Carousel
// 			showing multiple images of product or videos

// 	//TODO -
// 		the banner-image-container should have a height of at least 450 px in
// 		the banner title should be inside of the banner
// 	//Todo
// 		the about banner show be of set
// 			example  left side  should be lowered and teh right side higher
// 				and have the edges (bottom left and the top right ) should be longer
// 				and there would be longer than the banner

// 		in the about banner section you should put a collapsable  (that will show more information about the company ) use a locked lock to and a btn (or text ) to tell the users that they can click and to expand the text

// 		the about banner will be a vertical carousel
// 		depending on how tall the collapsable section is render more picture at the same time  in the carousel

// 	*/

// 	const [expanded, setExpanded] = useState(false);

// 	// ── swap these out for your real images
// 	const bannerImages = [
// 		{ src: front, alt: "Webster front" },
// 		{ src: banner, alt: "Services banner" },
// 		{ src: general, alt: "General" },
// 	];

// 	const aboutImages = [
// 		{ src: blankkeys, alt: "Blank keys on wall" },
// 		{ src: general, alt: "General" },
// 		{ src: test, alt: "Services" },
// 		{ src: front, alt: "Webster front" },
// 		{ src: banner, alt: "Services" },
// 	];

// 	const horizontal = useCarousel(bannerImages, 4000);

// 	// TODO for the  banner make a different carrousel    use this for inspiration https://freefrontend.com/css-carousels/    also try one for the carrousel c

// 	//TODO  add a section  where you have the logo and some items (keys , locks ,mail boxes)for example are rotating around it

// 	return (
// 		<div className="banner-container ">
// 			<div className="banner-title">
// 				<h1>
// 					Webster Security <span>Services</span>
// 				</h1>
// 			</div>
// 			<div className="banner-image-container">
// 				<div className="banner-image">
// 					{/* <img src={front} alt="Banner" /> */}
// 					{/* <img src={banner} alt="Banner" /> */}
// 					<div className="carousel-h">
// 						<div className="carousel-h-track" style={{ transform: `translateX(-${horizontal.current * 100}%)` }}>
// 							{bannerImages.map((img, i) => (
// 								<div className="carousel-h-slide" key={i}>
// 									<img src={img.src} alt={img.alt} />
// 								</div>
// 							))}
// 						</div>
// 						<div className="top-left">
// 							<h1>{/* Webster Security <span>Services</span> */}</h1>
// 						</div>

// 						{/* arrows */}
// 						<button className="carousel-arrow carousel-arrow-left" onClick={horizontal.prev}>
// 							&#8592;
// 						</button>
// 						<button className="carousel-arrow carousel-arrow-right" onClick={horizontal.next}>
// 							&#8594;
// 						</button>

// 						{/* dots */}
// 						<div className="carousel-dots">
// 							{bannerImages.map((_, i) => (
// 								<button key={i} className={`carousel-dot ${horizontal.current === i ? "active" : ""}`} onClick={() => horizontal.goTo(i)} />
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Banner;
