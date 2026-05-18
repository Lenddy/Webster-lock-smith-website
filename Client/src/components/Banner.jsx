import "../styles/banner.css";
import front from "../assets/banner/Webster-Front.jpg";
import banner from "../assets/banner/banner-services.png";
import general from "../assets/general/general-1.png";
// import general from "../assets/general/general-1.webp";
// import blankkeys from "../assets/general/blank-keys-on-wall.png";
import blankkeys from "../assets/general/blank-keys-on-wall.webp";

import { useState } from "react";

import { useCarousel } from "../hooks/useCarousel";

function Banner() {
	/*
	//TODO - 
	the sizes of the section bellow the navbar  are a little smaller thanks to the scroll bar (the scroll bar will made smaller and change to be position fix or relative  so that it does not matter the size of it )

	// TODO
		the banner can be a Carousel
			showing multiple images of product or videos

	//TODO - 
		the banner-image-container should have a height of at least 450 px in 
		the banner title should be inside of the banner
	//Todo	
		the about banner show be of set 
			example  left side  should be lowered and teh right side higher
				and have the edges (bottom left and the top right ) should be longer
				and there would be longer than the banner 

		in the about banner section you should put a collapsable  (that will show more information about the company ) use a locked lock to and a btn (or text ) to tell the users that they can click and to expand the text  
		
		the about banner will be a vertical carousel 
		depending on how tall the collapsable section is render more picture at the same time  in the carousel 

	*/

	const [expanded, setExpanded] = useState(false);

	// ── swap these out for your real images
	const bannerImages = [
		{ src: front, alt: "Webster front" },
		{ src: banner, alt: "Services banner" },
		{ src: general, alt: "General" },
	];

	const aboutImages = [
		{ src: blankkeys, alt: "Blank keys on wall" },
		{ src: general, alt: "General" },
		{ src: banner, alt: "Services" },
	];

	const horizontal = useCarousel(bannerImages, 4000);
	const vertical = useCarousel(aboutImages, 3500);

	return (
		<div className="banner-container">
			<div className="banner-title">
				<h1>
					Webster Security <span>Services</span>
				</h1>
			</div>
			<div className="banner-image-container">
				<div className="banner-image">
					{/* <img src={front} alt="Banner" /> */}
					{/* <img src={banner} alt="Banner" /> */}
					<div className="carousel-h">
						<div className="carousel-h-track" style={{ transform: `translateX(-${horizontal.current * 100}%)` }}>
							{bannerImages.map((img, i) => (
								<div className="carousel-h-slide" key={i}>
									<img src={img.src} alt={img.alt} />
								</div>
							))}
						</div>

						{/* arrows */}
						<button className="carousel-arrow carousel-arrow-left" onClick={horizontal.prev}>
							&#8592;
						</button>
						<button className="carousel-arrow carousel-arrow-right" onClick={horizontal.next}>
							&#8594;
						</button>

						{/* dots */}
						<div className="carousel-dots">
							{bannerImages.map((_, i) => (
								<button key={i} className={`carousel-dot ${horizontal.current === i ? "active" : ""}`} onClick={() => horizontal.goTo(i)} />
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="banner-about-container">
				<div className="banner-about-wrapper-container">
					<div className="banner-description-container">
						<div className={`banner-description ${expanded ? "expanded" : ""}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla magni fugit eum nesciunt, et dolores corrupti! Voluptatem molestias distinctio itaque. Dolorem, quaerat laboriosam aspernatur illum officia cumque quia nisi voluptatum cum doloribus dignissimos adipisci minus, tempora assumenda aliquam inventore sunt! Quos inventore incidunt recusandae blanditiis qui deleniti. Esse, cupiditate saepe natus officiis obcaecati a nulla fuga soluta. Sint facilis dolore tempore deserunt cum hic doloremque laboriosam dolorem quisquam quaerat aspernatur fuga repellendus voluptatibus, dolor, pariatur doloribus quasi laborum veniam delectus corporis expedita, itaque eius. Aut distinctio asperiores adipisci, sed soluta doloremque consectetur accusamus ab incidunt nam cum molestiae repellendus hic perferendis non, tenetur a veritatis dicta deserunt laborum! Ab veniam officiis consequuntur incidunt vero dolore, molestiae veritatis architecto consectetur laborum, debitis quibusdam sit animi facilis ex impedit excepturi natus doloremque fugit itaque. Quam nulla officia maiores autem quod doloribus porro quia obcaecati recusandae quaerat suscipit laboriosam, placeat voluptates accusantium laudantium magni saepe labore dicta culpa fuga sit quasi optio. Accusamus odit dignissimos, vitae sunt aliquid veritatis, at deleniti voluptate quam veniam modi laudantium saepe sit, quia perferendis eaque! Dolor reprehenderit, porro dolorem molestias fugit recusandae cumque autem repellendus minus, excepturi hic consequatur vero nostrum quos cum veritatis repellat quibusdam.</div>
						{/*
								 add litle pictures (icons) keys , locks other similitar thinks 
								 and make them move around  like butmp into each other
									the banner-description and the btn will be on to op it (z index)
								*/}
						<div className="banner-about-expand-btn-container">
							<button className="banner-about-expand-btn" onClick={() => setExpanded(!expanded)}>
								{expanded ? "🔓 Show less" : "🔒 Read more about us"}
							</button>
						</div>
					</div>

					<div className="banner-about-image-container">
						<div className="banner-about-image">
							{/* {general} */}
							{/* <img src={general} alt="Banner" /> */}

							{/* <img src={banner} alt="Banner" /> */}
							{/* <img src={blankkeys} alt="Banner" /> */}
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

export default Banner;
