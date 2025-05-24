import React from "react";

function Banner() {
	return (
		<div className="banner-container">
			<div className="banner-title">
				<h1>Webster Security Services</h1>
			</div>
			<div className="banner-image-container">
				<div className="banner-image"></div>
				{/* <img src="path/to/your/image.jpg" alt="Banner" /> */}
			</div>

			<div className="banner-about">
				<div className="banner-description"></div>
				<div className="banner-about-image"></div>
			</div>
		</div>
	);
}

export default Banner;
