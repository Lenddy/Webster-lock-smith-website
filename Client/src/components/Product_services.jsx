import "../styles/products-services.css";
import { useState, useEffect } from "react";
import { products } from "../utilities/products-services";
import { services } from "../utilities/products-services";
import blankkeys from "../assets/general/blank-keys-on-wall.webp";

//! in the title make an animation that change products and services (our Products ===> Services)

// ! put pictures inside of the dropdown of the products and services
// ! on out products and services page, we need to add a dropdown for each product and service
// ! and then we need to add a picture for each product and service
// ! and then we need to add a description for each product and service
// ! and then we need to add a link for each product and service

{
	/* for the collapsable section put locks on the collapsable header (that are lock) and open when the collapsable section is open */
}

// function Product_services() {
// 	const [expanded, setExpanded] = useState(false);

// 	const [openProduct, setOpenProduct] = useState(null);
// 	const [openService, setOpenService] = useState(null);

// 	const toggleProduct = (index) => {
// 		setOpenProduct(openProduct === index ? null : index);
// 	};

// 	const toggleService = (index) => {
// 		setOpenService(openService === index ? null : index);
// 	};

function Product_services({ productRef, serviceRef, expandProduct, expandService }) {
	const [openProduct, setOpenProduct] = useState(null);
	const [openService, setOpenService] = useState(null);

	// when navbar dropdown item is clicked, open that item
	useEffect(() => {
		if (expandProduct !== null) setOpenProduct(expandProduct);
	}, [expandProduct]);

	useEffect(() => {
		if (expandService !== null) setOpenService(expandService);
	}, [expandService]);

	const toggleProduct = (index) => {
		setOpenProduct(openProduct === index ? null : index);
	};

	const toggleService = (index) => {
		setOpenService(openService === index ? null : index);
	};

	return (
		<div className="product-services-container">
			<div className="products-services-title">
				<h1>
					<span className="blink">Our</span> <span className="blink-2"> Products</span> <span className="blink-3">And</span> <span className="blink-4">Services</span>{" "}
				</h1>
			</div>

			<div className="products-services-wrapper">
				<div className="products-container" ref={productRef} id="product">
					<div className="products-title">
						<h2>Products</h2>
					</div>
					<div className="products-description">
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus beatae quas voluptas minus delectus maiores repellat tempore perspiciatis ipsam excepturi quo, enim quos, natus blanditiis magni, libero cumque quibusdam voluptates? Tempora, unde. Sed adipisci ducimus accusamus exercitationem recusandae. Unde, odio voluptate sapiente hic facilis veritatis non praesentium aperiam minus ratione!</p>
					</div>

					<div className="products">
						<ul>
							{products.map((product, index) => (
								<li key={index} className={`slide-${index} ${openProduct === index ? "expanded" : ""} `} onClick={() => setOpenProduct(openProduct === index ? null : index)}>
									<div className="item-header">
										<h3>{product.name}</h3>
										<span className="item-chevron">{openProduct === index ? "🔓" : "🔒"}</span>
									</div>
									<div className="item-body">
										<p>{product.description}</p>
									</div>
								</li>
							))}

							{/* {products.map((product, index) => (
								<li key={index} className={`slide-${index} ${openProduct === index ? "expanded" : ""} `} onClick={() => toggleProduct(index)}>
									<div className="item-header">
										<h3>{product.name}</h3>
										<span className="item-chevron">{openProduct === index ? "🔓" : "🔒"}</span>
									</div>
									<div className="item-body">
										<p>{product.description}</p>
									</div>
								</li>
							))} */}
						</ul>
					</div>
				</div>

				<div className="services-container" ref={serviceRef} id="service">
					<div className="services-title">
						{" "}
						<h2>Services</h2>
					</div>
					<div className="services-description">
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus beatae quas voluptas minus delectus maiores repellat tempore perspiciatis ipsam excepturi quo, enim quos, natus blanditiis magni, libero cumque quibusdam voluptates? Tempora, unde. Sed adipisci ducimus accusamus exercitationem recusandae. Unde, odio voluptate sapiente hic facilis veritatis non praesentium aperiam minus ratione!</p>
					</div>
					<div className="services">
						<ul>
							{services.map((service, index) => (
								<li key={index} className={`service-slide-${index} ${openService === index ? "expanded" : ""} `} onClick={() => setOpenService(openService === index ? null : index)}>
									<div className="item-header">
										<h3>{service.name}</h3>
										<span className="item-chevron">{openService === index ? "🔓" : "🔒"}</span>
									</div>
									<div className="item-body">
										<p>{service.description}</p>
										<div>
											<img src={blankkeys} alt="blankkeys" />
										</div>
									</div>
								</li>
							))}

							{/* {services.map((service, index) => (
								<li key={index} className={`service-slide-${index} ${openService === index ? "expanded" : ""} `} onClick={() => toggleService(index)}>
									<div className="item-header">
										<h3>{service.name}</h3>
										<span className="item-chevron">{openService === index ? "🔓" : "🔒"}</span>
									</div>
									<div className="item-body">
										<p>{service.description}</p>
									</div>
								</li>
							))} */}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product_services;
