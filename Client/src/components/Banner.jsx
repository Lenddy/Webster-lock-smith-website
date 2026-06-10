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

function Banner({ screenWidth }) {
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
		timerRef.current = setInterval(next, 3000); //3500
		return () => clearInterval(timerRef.current);
	}, [next]);

	const pauseAuto = () => clearInterval(timerRef.current);
	const resumeAuto = () => {
		timerRef.current = setInterval(next, 3500); //3500
	};

	// TODO when expanding is to fast and when closing is almost instant fix that

	//TODO figure out the height problem for the

	//TODO after 1200 px only show the stack  make it wider  , put the left pictures  in the stacked make the expansion go down instead of side ways

	return (
		<div className="banner-container">
			<div className="banner-title">
				{/* <h1>
					Webster Security <span>Services</span>
				</h1> */}
			</div>

			<div className="banner-image-container">
				{/* background image — always full bleed behind everything */}
				<div className="banner-background-image">
					<img src={front} alt="Front of the store" />
				</div>

				<div className={`banner-foreground `}>
					<div className="banner-left-panel">
						{/* <div className="banner-phone">
							<h2>(718) 733-2200</h2>
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

						{/* <div className="banner-email">
							<h4>info@websterlocksmith.com</h4>
						</div> */}
					</div>
					{/* <div className={`banner-about-panel banner-about-visible`}> */}

					{screenWidth > 1000 && (
						<div className={`banner-about-panel-wrapper`}>
							<div className={`banner-about-panel`}>
								<h2 className="banner-about-panel-title">About Webster Locksmith</h2>

								{/* <br /> */}
								{/* <h2>(718) 733-2200</h2> */}
								<div className="banner-contact">
									<h3>(718) 733-2200</h3>
									<h3>service@websterlock.com</h3>
								</div>
								<br />

								<p>Family owned and operated since 1949. We've been serving the New York city area for over 75 years, providing residential, commercial, and automotive locksmith services.</p>
								<br />

								<p>Licensed and insured. Our team of certified locksmiths is always ready to help.</p>

								<ul className="banner-about-list">
									<li>
										<p>🔑 Residential lockouts</p>
									</li>
									<li>
										<p>🏢 Commercial security</p>{" "}
									</li>
									<li>
										<p>🚗 Automotive keys & fobs</p>
									</li>
									<li>
										<p>🔒 Lock installation & rekeying</p>
									</li>
									<li>
										<p>🛡️ Safe installation & repair</p>
									</li>
								</ul>

								{/* <div className="banner-email"> */}

								{/* </div> */}
							</div>
						</div>
					)}
				</div>
			</div>

			{screenWidth <= 1000 && (
				<div className={`banner-about-panel-wrapper`}>
					<div className={`banner-about-panel`}>
						<h2 className="banner-about-panel-title">About Webster Locksmith</h2>

						{/* <br /> */}
						{/* <h2>(718) 733-2200</h2> */}
						<div className="banner-phone">
							<h3>(718) 733-2200</h3>
							<h3>service@websterlock.com</h3>
						</div>
						<br />

						<p>Family owned and operated since 1949. We've been serving the New York city area for over 75 years, providing residential, commercial, and automotive locksmith services.</p>
						<br />

						<p>Licensed and insured. Our team of certified locksmiths is always ready to help.</p>

						<ul className="banner-about-list">
							<li>🔑 Residential lockouts</li>
							<li>🏢 Commercial security</li>
							<li>🚗 Automotive keys & fobs</li>
							<li>🔒 Lock installation & rekeying</li>
							<li>🛡️ Safe installation & repair</li>
						</ul>

						{/* <div className="banner-email"> */}

						{/* </div> */}
					</div>
				</div>
			)}
		</div>
	);
}

export default Banner;
