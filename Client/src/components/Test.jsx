import React from "react";
// import video from "../assets/Webster.mp4";
// import video from "../assets/video-again.mp4";
// import video from "../assets/video-ch.mp4";
// import gif from "../assets/gift-no-background.gif";
import "../styles/test.css";

function Test() {
	const slides = [
		{
			id: "scotland",
			name: "Scotland",
			des: "Experience the mystical Highlands under twilight skies and misty lochs.",
			image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
			link: "https://github.com/MDJAmin",
		},
		{
			id: "norway",
			name: "Norway",
			des: "Chase the Northern Lights under star-lit skies along scenic fjord roads.",
			image: "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0",
			link: "https://github.com/MDJAmin",
		},
		{
			id: "new-zealand",
			name: "New Zealand",
			des: "Wander dramatic, mist-laden mountain paths that feel straight out of a dream.",
			image: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
			link: "https://github.com/MDJAmin",
		},
		{
			id: "japan",
			name: "Japan",
			des: "Discover serene mountain temples shrouded in dusk and ancient forest trails.",
			image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
			link: "https://github.com/MDJAmin",
		},
	];

	function Carousel() {
		const [items, setItems] = useState(slides);

		// equivalent of: document.querySelector(".slide").appendChild(items[0])
		const handleNext = () => {
			setItems((prev) => {
				const [first, ...rest] = prev;
				return [...rest, first];
			});
		};

		// equivalent of: document.querySelector(".slide").prepend(items[items.length - 1])
		const handlePrev = () => {
			setItems((prev) => {
				const last = prev[prev.length - 1];
				return [last, ...prev.slice(0, -1)];
			});
		};

		return (
			<div className="container">
				<div className="slide">
					{items.map((item) => (
						<div key={item.id} className="item" style={{ backgroundImage: `url('${item.image}')` }}>
							<div className="content">
								<div className="name">{item.name}</div>
								<div className="des">{item.des}</div>
								<a className="seeMore" target="_blank" rel="noopener noreferrer" href={item.link}>
									<button>See More</button>
								</a>
							</div>
						</div>
					))}
				</div>
				<div className="button">
					<button className="prev" onClick={handlePrev}>
						◁
					</button>
					<button className="next" onClick={handleNext}>
						▷
					</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div>
				{/* <video src={video} autoPlay muted playsInline className="test-video" /> */}
				{/* <video src={gif} autoPlay muted playsInline className="test-video" /> */}
				{/* <img src={} alt="" className="logo" /> */}
			</div>
		</div>
	);
}

export default Test;

// function Navbar({ scrolled, scrollToTop, onHomeClick, onProductsClick, onServicesClick, onAboutClick }) {
// 	/*
// 		//TODO -

// 		products , services and translate will have drop downs (will about have one ? to go there and open the collapse section ?  )

// 	// see if you some how can make the logo  have a animation where the teeth glow (Twinkle Smile)  when first loading the page

// 	the idea is that the nav bar is going to nothing then the  logo start getting bigger (scaling) then have the Twinkle Smile then get smaller to fit in the nav bar  then the other elements will start showing the ends will start showing  from  both sides (from the left and righty to the center )

// 	or another option is to show the the remaining elements from the center to the out side they would have a smaller  scale (they would be come bigger and then shrink to their normal size )

// 	or have the other element render first  from the out side to the center  (growing and shrinking or moving from the out side to the inside ) then showing the logo with the effect

// 	this effect would only happen only if the users if at the top of the page

// 	in mobile view have the effect for the logo be the same but for the other elements  be a menu that would drop down from the top  and also have the translation logo be combine with a gear wheel  so that you can put  a reduce animations so that the user does not have to see the animation every time  if they dont want to  translated site ]english and Spanish (and also dark /light theme)

// 	*/

// 	/* TODO
// 	figure out if you can make the scroll to top work with the  overflow-x: hidden;

// 	*/

// 	// function ScrollToTopBtn() {
// 	// const [showBtn, setShowBtn] = useState(false);

// 	// useEffect(() => {
// 	// 	const handleScroll = () => {
// 	// 		setShowBtn(window.scrollY > 0);
// 	// 	};
// 	// 	window.addEventListener("scroll", handleScroll);
// 	// 	return () => window.removeEventListener("scroll", handleScroll);
// 	// }, []);

// 	// const scrollToTop = () => {
// 	// 	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// 	// };

// 	// if (!showBtn) return null;

// 	// return (
// 	// 	<button onClick={scrollToTop} style={{ position: "fixed", bottom: "20px", right: "20px" }}>
// 	// 		Back to Top
// 	// 	</button>
// 	// );
// 	// }

// 	const onProductItemClick = (p) => {
// 		console.log(`this product was click:${p}`);
// 	};
// 	const onServiceItemClick = (s) => {
// 		console.log(`this product was click:${s}`);
// 	};

// 	const [navPosition, setNavPosition] = useState(
// 		() => localStorage.getItem("navPosition") || "top" // "top" | "left" | "right"
// 	);

// 	return (
// 		<div className={`nav-container expand ${scrolled ? "nav-scrolled" : ""}`}>
// 			<div className="nav-items">
// 				<ul>
// 					{/* LEFT 2 — furthest from logo */}
// 					<li className="nav-left-2">
// 						<h4 onClick={onHomeClick}>
// 							Home <span className="chevron">▾</span>
// 						</h4>
// 						<div className="nav-dropdown-menu">
// 							<a href="#">Placeholder</a>
// 							<a href="#">Placeholder</a>
// 							<a href="#">Placeholder</a>
// 						</div>
// 					</li>

// 					{/* LEFT 1 — closest to logo */}
// 					<li className="nav-left-1">
// 						<h4 onClick={onProductsClick}>
// 							Products & Services
// 							<span className="chevron">▾</span>
// 						</h4>
// 						<div className="nav-dropdown-menu">
// 							<a onClick={() => onProductItemClick(0)}>Residential Locks</a>
// 							<a onClick={() => onProductItemClick(1)}>Commercial Locks</a>
// 							<a onClick={() => onProductItemClick(2)}>Smart Locks</a>
// 							{/* services */}
// 							<a onClick={() => onServiceItemClick(0)}>Emergency Lockout</a>
// 							<a onClick={() => onServiceItemClick(1)}>Lock Installation</a>
// 							<a onClick={() => onServiceItemClick(2)}>Rekeying</a>
// 						</div>
// 					</li>

// 					{/* CENTER — logo */}
// 					<li>
// 						<div className="logo-container logo-animate" onClick={scrollToTop}>
// 							<video src={video} autoPlay muted playsInline className="logo" />
// 						</div>
// 					</li>

// 					{/* RIGHT 1 — closest to logo */}
// 					<li className="nav-right-1">
// 						<h4 onClick={onAboutClick}>About</h4>
// 					</li>

// 					{/* RIGHT 2 — furthest from logo */}
// 					<li className="nav-right-2">
// 						<h4>
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="settingIcon">
// 								<path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
// 							</svg>
// 							<span className="chevron">▾</span>
// 						</h4>
// 						<div className="nav-dropdown-menu">
// 							<a href="#">
// 								{" "}
// 								<div>
// 									<span>
// 										{" "}
// 										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="LanguageIcon">
// 											<path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
// 										</svg>{" "}
// 									</span>

// 									<span>Placeholder</span>
// 								</div>
// 							</a>
// 							<a href="#">
// 								<div>
// 									<span>
// 										{" "}
// 										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="LanguageIcon">
// 											<path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
// 										</svg>{" "}
// 									</span>

// 									<span>Placeholder</span>
// 								</div>
// 							</a>
// 							<a href="#">Placeholder</a>
// 						</div>
// 					</li>
// 					{/* <li>
// 						<h4>Careers</h4>
// 					</li> */}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }

// export default Navbar;

// this is from the banner component
// Banner

// import "../styles/banner.css";
// import front from "../assets/banner/Webster-Front.jpg";
// import banner from "../assets/banner/banner-services.png";
// import general from "../assets/general/general-1.png";
// import blankkeys from "../assets/general/blank-keys-on-wall.webp";
// import test from "../assets/general/s-l400.webp";
// import { useState, useRef, useCallback, useEffect } from "react";

// // import storeFront from "../assets/general/Webster-Front-";

// // random angle per image — generated once, stable across renders
// const bannerImages = [
// 	{ src: front, alt: "Webster front", title: "Since 1949", sub: "Trusted security" },
// 	{ src: banner, alt: "Services banner", title: "Full Service", sub: "Lock & security solutions" },
// 	{ src: general, alt: "General", title: "Residential", sub: "Home locksmith services" },
// 	{ src: blankkeys, alt: "Blank keys", title: "Key Cutting", sub: "All key types" },
// 	{ src: test, alt: "Services", title: "Commercial", sub: "Business security" },
// ].map((item) => ({
// 	...item,
// 	angle: `${(Math.random() * 20 - 10).toFixed(2)}deg`,
// }));

// const N = bannerImages.length;

// function Banner() {
// 	const [expanded, setExpanded] = useState(false);
// 	const sectionRef = useRef(null);
// 	const kRef = useRef(0);
// 	const timerRef = useRef(null);

// 	const goTo = useCallback((next) => {
// 		kRef.current = ((next % N) + N) % N;
// 		sectionRef.current?.style.setProperty("--k", kRef.current);
// 	}, []);

// 	const next = useCallback(() => goTo(kRef.current + 1), [goTo]);
// 	const prev = useCallback(() => goTo(kRef.current - 1), [goTo]);

// 	// auto-play
// 	useEffect(() => {
// 		timerRef.current = setInterval(next, 3500);
// 		return () => clearInterval(timerRef.current);
// 	}, [next]);

// 	const pauseAuto = () => clearInterval(timerRef.current);
// 	const resumeAuto = () => {
// 		timerRef.current = setInterval(next, 3500);
// 	};

/* TODO  put a box on the left (for picture) and  make the stack be on the right

	on the left  that will be for a picture or something else 

	on the right put the  stack 

	on top of the stack put the number  of the company 

	on the bottom put the email 

	put a expand btn bellow or around the stack  

functionality:
	on expand  the stack will move to the left (number and email will remain in place)

	the about section will apear on the right (tis could be fading from the right or popping in (scale) )

	if you decide to put a picture on the left after the expansion the left picture will be integrated to the stack


smaller screens:
	the picture on the left (if any) will be on the stack expanded or not 

	on expand  the about shows up bellow the stack pushing the emails down

*/

// 	return (
// 		<div className="banner-container">
// 			<div className="banner-title">
// 				<h1>
// 					Webster Security <span>Services</span>
// 				</h1>
// 			</div>

// 			<div className="banner-image-container">
// 				<div className="banner-image">
// 					<div className="banner-background-image">
// 						<img src={front} alt="Front of the store" />
// 					</div>
// 					<div>
// 						<div>
// 							<h1>(718) 733-2200</h1>
// 						</div>
// 						{/* stack carousel replaces carousel-h */}
// 						<section ref={sectionRef} className="stack-carousel" style={{ "--n": N, "--k": 0 }} onMouseEnter={pauseAuto} onMouseLeave={resumeAuto}>
// 							{bannerImages.map((img, i) => (
// 								<article key={i} className="stack-card" style={{ "--i": i, "--a": img.angle }}>
// 									<h2 className="stack-title">{img.title}</h2>
// 									<em className="stack-sub">{img.sub}</em>
// 									<img src={img.src} alt={img.alt} className="stack-img" />
// 								</article>
// 							))}

// 							<div className="stack-controls">
// 								<button className="stack-btn" aria-label="previous" onClick={prev} />
// 								<button className="stack-btn stack-btn--next" aria-label="next" onClick={next} />
// 							</div>
// 						</section>
// 						<div>emails</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Banner;

//!! old
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
