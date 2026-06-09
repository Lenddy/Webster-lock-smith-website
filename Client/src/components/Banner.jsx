import "../styles/banner.css";
// import front from "../assets/banner/Webster-Front.jpg";
// import front from "../assets/banner/front-store.jpg";
// import front from "../assets/banner/front-store-new.jpg";
// import front from "../assets/banner/front-store-new-1.jpg";
import front from "../assets/banner/front-store-1.jpg";
// import front from "../assets/banner/front-store-2.jpg";
import banner from "../assets/banner/banner-services.png";
import general from "../assets/general/general-1.png";
import blankkeys from "../assets/general/blank-keys-on-wall.webp";
import test from "../assets/general/s-l400.webp";
import { useState, useRef, useCallback, useEffect } from "react";

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

	useEffect(() => {
		// timerRef.current = setInterval(next, 3500); //3500
		// return () => clearInterval(timerRef.current);
	}, [next]);

	const pauseAuto = () => clearInterval(timerRef.current);
	const resumeAuto = () => {
		// timerRef.current = setInterval(next, 3500); //3500
	};

	// TODO when expanding is to fast and when closing is almost instant fix that

	//TODO figure out the height problem for the

	//TODO after 1200 px only show the stack  make it wider  , put the left pictures  in the stacked make the expansion go down instead of side ways

	return (
		<div className="banner-container">
			<div className="banner-title">
				<h1>
					Webster Security <span>Services</span>
				</h1>
			</div>

			<div className="banner-image-container">
				{/* background image — always full bleed behind everything */}
				<div className="banner-background-image">
					<img src={front} alt="Front of the store" />
				</div>

				{/* foreground layout: left pic | right stack */}
				<div className={`banner-foreground ${expanded ? "expanded" : ""}`}>
					{/* LEFT — picture slot */}
					{/* on expand this fades out on desktop, joins stack on mobile */}
					<div className={`banner-left-panel ${expanded ? "banner-left-hidden" : ""}`}>
						{/* <img src={blankkeys} alt="Keys" className="banner-left-img" /> */}
						<img src={front} alt="Keys" className="banner-left-img" />
					</div>
					{/* <div className="wrapper-banner-right"> */}
					{/* RIGHT — stack column */}
					<div className="banner-right-panel">
						{/* phone number above stack */}
						<div className="banner-phone">
							<h2>(718) 733-2200</h2>
						</div>

						{/* <div className="banner-email">
							<p>info@websterlocksmith.com</p>
						</div> */}

						{/* stack carousel */}
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

						{/* email below stack */}
						{/* <div className="banner-phone">
							<h2>(718) 733-2200</h2>
						</div>*/}
						<div className="banner-email">
							<h4>info@websterlocksmith.com</h4>
						</div>

						{/* expand button */}
						<button className="banner-expand-btn" onClick={() => setExpanded(!expanded)}>
							{expanded ? "✕ Close" : "Learn more about us"}
						</button>
					</div>
					{/* </div>y */}
					{/* ABOUT PANEL — appears on expand to the right of stack */}
					<div className={`banner-about-panel ${expanded ? "banner-about-visible" : ""}`}>
						<h3>About Webster Locksmith</h3>

						<p>Family owned and operated since 1949. We've been serving the New York area for over 75 years, providing residential, commercial, and automotive locksmith services.</p>

						<p>Licensed and insured. Our team of certified locksmiths is always ready to help.</p>

						<ul className="banner-about-list">
							<li>🔑 Residential lockouts</li>
							<li>🏢 Commercial security</li>
							<li>🚗 Automotive keys & fobs</li>
							<li>🔒 Lock installation & rekeying</li>
							<li>🛡️ Safe installation & repair</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
