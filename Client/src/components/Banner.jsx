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

	// NOTE for the right side about

	//TODO - 7 for the list see if you would like to dynamically change the text (to add other sections)
	//TODO - 8 see if you want to make the about section clickable )
	//TODO - for the light mode  change the yel-low background of the list to r-ed maybe

	// NOTE for the right side stack

	//NOTE - done
	// NOTE for the right side about
	// - 1 the space(height) needs to be smaller when passing a viewpoint (1150 base) (dynamically if posible ) !!!!!!!!!!(done for now)
	// - 2 see if the box shadow will be modified? also fix it for the (1000) viewpoint
	//  NOTE for the right side stacksy
	// - 1 align and justify in the center (1000) viewpoint done
	// - 1 is the margin bottom not working now ? above  (1000) viewpoint (yes it is  done)
	// - 3 move the title and sub tittle control bellow the stack and the  (done)
	// - 2 make the stack card wider(and taller ?) passing the (1000) viewpoint  to take more spaces (done)
	// - 3 make the contact have more space between when passing the 1000 viewport (done)
	// - 3 make content take more height(space) to fit the screen when passing the 1000 viewport(done)
	// - 4 in smaller viewport (than 1000) make the contact have vertical flex direction (done)
	// - 5 make the list (li) have a better spacing and width when passing the 1000 viewport(done)
	// - 6 make the list (li) back ground have more opacity when passing the 1000 viewport (done)

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
								<h2 className="banner-about-panel-title"> Webster Lock</h2>

								{/* <br /> */}
								{/* <h2>(718) 733-2200</h2> */}
								<div className="banner-contact">
									<h3>(718)733-2200</h3>
									<h3>service@websterlock.com</h3>
								</div>
								{/* <br /> */}

								<p>Family owned and operated since 1949. We've been serving the New York city area for over 75 years, providing residential, commercial, and automotive locksmith services.</p>
								{/* <br /> */}

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
						<h2 className="banner-about-panel-title"> Webster Lock</h2>

						{/* <br /> */}
						{/* <h2>(718) 733-2200</h2> */}
						<div className="banner-contact">
							<h3>(718)733-2200</h3>
							<h3>service@websterlock.com</h3>
						</div>
						{/* <br /> */}

						<p>Family owned and operated since 1949. We've been serving the New York city area for over 75 years, providing residential, commercial, and automotive locksmith services.</p>
						{/* <br /> */}

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
	);
}

export default Banner;
