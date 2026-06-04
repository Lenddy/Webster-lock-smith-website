import "../styles/about.css";
import { useState } from "react";
import { useCarousel } from "../hooks/useCarousel";

import front from "../assets/banner/Webster-Front.jpg";
import banner from "../assets/banner/banner-services.png";
import general from "../assets/general/general-1.png";
import blankKeys from "../assets/general/blank-keys-on-wall.webp";
import test from "../assets/general/s-l400.webp";

export default function About() {
	// TODO -  change the font of the about decryption  to be smaller
	// TODO -  make the about description container smaller
	// TODO - change the class names in the component

	const [expanded, setExpanded] = useState(false);

	const aboutImages = [
		{ src: blankKeys, alt: "Blank keys on wall" },
		{ src: general, alt: "General" },
		{ src: test, alt: "Services" },
		{ src: front, alt: "Webster front" },
		{ src: banner, alt: "Services" },
	];

	const vertical = useCarousel(aboutImages, 3500);

	return (
		<div>
			<div className={`banner-about-container ${!expanded ? "" : "expanded"}`}>
				<div className="banner-about-wrapper-container">
					<div className="banner-description-container">
						<h1>About</h1>

						<div className={`banner-description ${!expanded ? "" : "expanded"}`}>
							<p>
								Webster Lock and Hardware Co. Inc was founded in 1949 by Mike and Ann Miller.
								<br />
								Today their son, Allan Miller is the Chief Executive Officer of Webster Locksmiths. Allan’s son, David Miller is Vice President of Operations.
								<br />
								Webster Lock and Hardware is a complete security and security related, distributor and manufacturer. Forty radio-dispatched vehicles are serving the needs of residential and commercial customers throughout the New York metro area.
							</p>
						</div>
						{/*
								 add litle pictures (icons) keys , locks other similitar thinks 
								 and make them move around  like butmp into each other
									the banner-description and the btn will be on to op it (z index)
								*/}
						<div className="banner-about-expand-btn-container">
							<button className="banner-about-expand-btn" onClick={() => setExpanded(!expanded)}>
								{!expanded ? "🔒 Read more about us" : "🔓 Show less"}
							</button>
						</div>
					</div>

					<div className="banner-about-image-container">
						<div className="banner-about-image">
							<div className="carousel-v">
								<div className="carousel-v-track" style={{ transform: `translateY(-${vertical.current * 100}%)` }}>
									{aboutImages.map((img, i) => (
										<div className="carousel-v-slide" key={i}>
											<img src={img.src} alt={img.alt} />
										</div>
									))}
								</div>

								{/* arrows */}
								<button className="carousel-arrow carousel-arrow-top" onClick={vertical.prev}>
									&#8593;
								</button>
								<button className="carousel-arrow carousel-arrow-bottom" onClick={vertical.next}>
									&#8595;
								</button>

								{/* dots on the side */}
								<div className="carousel-dots-v">
									{aboutImages.map((_, i) => (
										<button key={i} className={`carousel-dot ${vertical.current === i ? "active" : ""}`} onClick={() => vertical.goTo(i)} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
