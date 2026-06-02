import "../styles/gallery.css";
import { sections } from "../utilities/gallery-sections";
import Logo from "../assets/WebsterSiteLogo.png";
import Hes from "../assets/lock-company-logos/hes.png";
import Falcon from "../assets/lock-company-logos/falcon.png";
import Folger from "../assets/lock-company-logos/folger.png";

function Gallery() {
	// make it like a carousel
	// that has 2 lines one going left the other going right

	// and to also have a btn that when is click it expands  to be a grid showing all the companies and separating them by section (some will be in multiple section )

	// separate the companies base on what they do (locks,  ELECTRIC STRIKES & MAGNETIC LOCKS , DOOR CLOSERS , PANIC BAR HARDWARE & EXIT DEVICES , DECORATIVE HARDWARE , DOOR ACCESSORIES)
	// this is and idea on how it would look like
	// https://mr-locks.com/manufacturers/

	// but see if you want to put it like (left side is a section that is vertical that container the section name and the right side is a longer horizontally segment that will have it own grids showing the brands)
	// go see excalidraw concept

	// from the 2 line carousel you can make an animation of the carousel  leaving  to the top and showing the grid caming from the bottom

	// for the grid you have to make a container that will  have ta (column container on the left (this will hold the names of the sections)) and on the right they will be rows (this will be where the images live)

	// i wold like to get this one with grid if posible

	// fix the remaining part of the grid later

	return (
		<div>
			<h2>Our Vendors</h2>

			<div className="gallery-container">
				<div className="gallery-expanded-container">
					{sections.map((section) => (
						<section key={section.name} className="section-row">
							<div className="column-container">
								<h3 className="column-title">{section.name}</h3>
							</div>

							{/* scroll wrapper — this constrains and clips */}
							<div className="images-scroll-wrapper">
								<div className="images-area">
									{section.images.map((img, i) => (
										<div className="image-wrapper" key={i}>
											<img src={img.src} alt={img.alt} />
										</div>
									))}
								</div>
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	);
}

export default Gallery;
