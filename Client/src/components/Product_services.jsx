import React from "react";
import "../styles/products-services.css";

//! in the title make an animation that change products and services (our Products ===> Services)

// ! put pictures inside of the dropdown of the products and services
// ! on out products and services page, we need to add a dropdown for each product and service
// ! and then we need to add a picture for each product and service
// ! and then we need to add a description for each product and service
// ! and then we need to add a link for each product and service

{
	/* for the collapsable section put locks on the collapsable header (that are lock) and open when the collapsable section is open */
}

function Product_services() {
	return (
		<div className="product-services-container">
			<div className="products-services-title">
				<h1>Products and Services</h1>
			</div>
			<div className="products-services-bottom-container">
				<div className="products-container">
					<div className="products-title">
						<h2>Products</h2>
					</div>
					<div className="products-description">
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus beatae quas voluptas minus delectus maiores repellat tempore perspiciatis ipsam excepturi quo, enim quos, natus blanditiis magni, libero cumque quibusdam voluptates? Tempora, unde. Sed adipisci ducimus accusamus exercitationem recusandae. Unde, odio voluptate sapiente hic facilis veritatis non praesentium aperiam minus ratione!</p>
					</div>

					<div className="products">
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
				</div>

				<div className="services-container">
					<div className="services-title">
						{" "}
						<h2>Services</h2>
					</div>
					<div className="services-description">
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus beatae quas voluptas minus delectus maiores repellat tempore perspiciatis ipsam excepturi quo, enim quos, natus blanditiis magni, libero cumque quibusdam voluptates? Tempora, unde. Sed adipisci ducimus accusamus exercitationem recusandae. Unde, odio voluptate sapiente hic facilis veritatis non praesentium aperiam minus ratione!</p>
					</div>
					<div className="services">
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
		</div>
	);
}

export default Product_services;
