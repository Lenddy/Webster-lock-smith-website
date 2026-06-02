import "../styles/about.css";
import { useState } from "react";
import { useCarousel } from "../hooks/useCarousel";

import front from "../assets/banner/Webster-Front.jpg";
import banner from "../assets/banner/banner-services.png";
import general from "../assets/general/general-1.png";
import blankkeys from "../assets/general/blank-keys-on-wall.webp";
import test from "../assets/general/s-l400.webp";

export default function About() {
	// TODO -  change the font of the about decryption  to be smaller
	// TODO -  make the about description container smaller
	// TODO - change the class names in the component

	const [expanded, setExpanded] = useState(false);

	const aboutImages = [
		{ src: blankkeys, alt: "Blank keys on wall" },
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
						<div className={`banner-description ${!expanded ? "" : "expanded"}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla magni fugit eum nesciunt, et dolores corrupti! Voluptatem molestias distinctio itaque. Dolorem, quaerat laboriosam aspernatur illum officia cumque quia nisi voluptatum cum doloribus dignissimos adipisci minus, tempora assumenda aliquam inventore sunt! Quos inventore incidunt recusandae blanditiis qui deleniti. Esse, cupiditate saepe natus officiis obcaecati a nulla fuga soluta. Sint facilis dolore tempore deserunt cum hic doloremque laboriosam dolorem quisquam quaerat aspernatur fuga repellendus voluptatibus, dolor, pariatur doloribus quasi laborum veniam delectus corporis expedita, itaque eius. Aut distinctio asperiores adipisci, sed soluta doloremque consectetur accusamus ab incidunt nam cum molestiae repellendus hic perferendis non, tenetur a veritatis dicta deserunt laborum! Ab veniam officiis consequuntur incidunt vero dolore, molestiae veritatis architecto consectetur laborum, debitis quibusdam sit animi facilis ex impedit excepturi natus doloremque fugit itaque. Quam nulla officia maiores autem quod doloribus porro quia obcaecati recusandae quaerat suscipit laboriosam, placeat voluptates accusantium laudantium magni saepe labore dicta culpa fuga sit quasi optio. Accusamus odit dignissimos, vitae sunt aliquid veritatis, at deleniti voluptate quam veniam modi laudantium saepe sit, quia perferendis eaque! Dolor reprehenderit, porro dolorem molestias fugit recusandae cumque autem repellendus minus, excepturi hic consequatur vero nostrum quos cum veritatis repellat quibusdam.</div>
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
