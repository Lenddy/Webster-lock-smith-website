import "../styles/banner.css";
import front from "../assets/Webster-Front.jpg";

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
				<div className="banner-about-inner-container">
					<div className="banner-description-container">
						<div className="banner-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veritatis blanditiis similique nobis est, harum cupiditate! Fugit fuga dicta blanditiis error, praesentium voluptatibus rerum quaerat sit accusamus. In laboriosam cumque, ex facere incidunt dolor itaque dolorem repudiandae iusto similique est natus sunt nulla possimus obcaecati consequuntur veniam, explicabo impedit. Tenetur quas, excepturi qui perferendis natus rerum dolor veniam, eius rem in alias, omnis aut beatae cumque quam. Dicta, obcaecati totam placeat quis optio, aut ab unde necessitatibus quod cupiditate aliquam vero sapiente delectus, praesentium tempore facilis nulla quos? Veritatis facere iure ipsum, at odit nobis dolorem. Labore veritatis iste ea?</div>
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
