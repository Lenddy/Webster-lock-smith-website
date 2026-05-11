import "../styles/banner.css";
import front from "../assets/Webster-Front.jpg";

import { useState } from "react";

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

	return (
		<div className="banner-container">
			<div className="banner-title">
				<h1>
					Webster Security <span>Services</span>
				</h1>
			</div>
			<div className="banner-image-container">
				<div className="banner-image">
					<img src={front} alt="Banner" />
				</div>
			</div>

			<div className="banner-about-container">
				<div className="banner-about-wrapper-container">
					<div className="banner-description-wrapper">
						{/* THE BOX THAT COLLAPSES — this one gets max-height */}
						<div className={`banner-description-container ${expanded ? "expanded" : ""}`}>
							<div className="banner-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla magni fugit eum nesciunt, et dolores corrupti! Voluptatem molestias distinctio itaque. Dolorem, quaerat laboriosam aspernatur illum officia cumque quia nisi voluptatum cum doloribus dignissimos adipisci minus, tempora assumenda aliquam inventore sunt! Quos inventore incidunt recusandae blanditiis qui deleniti. Esse, cupiditate saepe natus officiis obcaecati a nulla fuga soluta. Sint facilis dolore tempore deserunt cum hic doloremque laboriosam dolorem quisquam quaerat aspernatur fuga repellendus voluptatibus, dolor, pariatur doloribus quasi laborum veniam delectus corporis expedita, itaque eius. Aut distinctio asperiores adipisci, sed soluta doloremque consectetur accusamus ab incidunt nam cum molestiae repellendus hic perferendis non, tenetur a veritatis dicta deserunt laborum! Ab veniam officiis consequuntur incidunt vero dolore, molestiae veritatis architecto consectetur laborum, debitis quibusdam sit animi facilis ex impedit excepturi natus doloremque fugit itaque. Quam nulla officia maiores autem quod doloribus porro quia obcaecati recusandae quaerat suscipit laboriosam, placeat voluptates accusantium laudantium magni saepe labore dicta culpa fuga sit quasi optio. Accusamus odit dignissimos, vitae sunt aliquid veritatis, at deleniti voluptate quam veniam modi laudantium saepe sit, quia perferendis eaque! Dolor reprehenderit, porro dolorem molestias fugit recusandae cumque autem repellendus minus, excepturi hic consequatur vero nostrum quos cum veritatis repellat quibusdam</div>
						</div>

						{/* BUTTON sits outside the collapsing box */}
						<button className="banner-expand-btn" onClick={() => setExpanded(!expanded)}>
							{expanded ? "🔓 Show less" : "🔒 Read more about us"}
						</button>
					</div>

					<div className="banner-about-image-container">
						<div className="banner-about-image">
							<img src="path/to/your/image.jpg" alt="about-Banner" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
<div className="banner-description-container">
	{/* expanded class goes HERE on the text div */}
	<div className={`banner-description ${expanded ? "expanded" : ""}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla magni fugit eum nesciunt, et dolores corrupti! Voluptatem molestias distinctio itaque. Dolorem, quaerat laboriosam aspernatur illum officia cumque quia nisi voluptatum cum doloribus dignissimos adipisci minus, tempora assumenda aliquam inventore sunt! Quos inventore incidunt recusandae blanditiis qui deleniti. Esse, cupiditate saepe natus officiis obcaecati a nulla fuga soluta. Sint facilis dolore tempore deserunt cum hic doloremque laboriosam dolorem quisquam quaerat aspernatur fuga repellendus voluptatibus, dolor, pariatur doloribus quasi laborum veniam delectus corporis expedita, itaque eius. Aut distinctio asperiores adipisci, sed soluta doloremque consectetur accusamus ab incidunt nam cum molestiae repellendus hic perferendis non, tenetur a veritatis dicta deserunt laborum! Ab veniam officiis consequuntur incidunt vero dolore, molestiae veritatis architecto consectetur laborum, debitis quibusdam sit animi facilis ex impedit excepturi natus doloremque fugit itaque. Quam nulla officia maiores autem quod doloribus porro quia obcaecati recusandae quaerat suscipit laboriosam, placeat voluptates accusantium laudantium magni saepe labore dicta culpa fuga sit quasi optio. Accusamus odit dignissimos, vitae sunt aliquid veritatis, at deleniti voluptate quam veniam modi laudantium saepe sit, quia perferendis eaque! Dolor reprehenderit, porro dolorem molestias fugit recusandae cumque autem repellendus minus, excepturi hic consequatur vero nostrum quos cum veritatis repellat quibusdam. </div>

	<button className="banner-expand-btn" onClick={() => setExpanded(!expanded)}>
		{expanded ? "🔓 Show less" : "🔒 Read more about us"}
	</button>
</div>;
