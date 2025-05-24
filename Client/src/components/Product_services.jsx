import React from "react";

//! in the title make an animation that change products and services (our Products ===> Services)

//! put pictures inside of the dropdown of the products and services
// ! on out products and services page, we need to add a dropdown for each product and service
// ! and then we need to add a picture for each product and service
// ! and then we need to add a description for each product and service
// ! and then we need to add a link for each product and service

function Product_services() {
	return (
		<div className="product-services-container">
			<div className="products-services-title"></div>
			<div className="products-services-bottom-container">
				<div className="products-container">
					<ul>
						<li>
							<h3>product name</h3>
						</li>
						<li>
							<h3>product name</h3>
						</li>
						<li>
							<h3>product name</h3>
						</li>
						<li>
							<h3>product name</h3>
						</li>
					</ul>
				</div>
				<div className="services-container">
					<ul>
						<li>
							<h3>services</h3>
						</li>
						<li>
							<h3>services</h3>
						</li>
						<li>
							<h3>services</h3>
						</li>
						<li>
							<h3>services</h3>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Product_services;
