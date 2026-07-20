import { useState, useEffect } from "react";
import { products } from "../utilities/products-services";

import blankkeys from "../assets/general/blank-keys-on-wall.webp";
import { Link } from "react-router-dom";

export default function Products({ productRef, expandProduct }) {
	const [openProduct, setOpenProduct] = useState(null);

	// when navbar dropdown item is clicked, open that item
	useEffect(() => {
		if (expandProduct !== null) setOpenProduct(expandProduct);
	}, [expandProduct]);

	const toggleProduct = (index) => {
		setOpenProduct(openProduct === index ? null : index);
	};

	const [visibleSections, setVisibleSections] = useState({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log("this is the entry", entry);
					if (entry.isIntersecting) {
						console.log("this is the entry isIntersecting", entry.isIntersecting);
						// setVisibleSections((prev) => ({
						// 	// ...prev,
						// 	[entry.target.id]: true, // key = the div's id
						// }));

						setVisibleSections({
							// ...prev,
							[entry.target.id]: true, // key = the div's id
						});
						observer.unobserve(entry.target); // only trigger once
					}
				});
			},
			{ threshold: 0.4 } // 3
			// 5% visible is enough to trigger
		);

		// const sections = productsRef.current;

		// sections.forEach((section) => {
		if (productRef.current) observer.observe(productRef.current);
		// });

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		console.log("visibleSections from products updated:", visibleSections);
	}, [visibleSections]);

	return (
		<div className={`products-container ${visibleSections.products ? "show" : ""} `} ref={productRef} id="products">
			<div className="products-title">
				<h2>Products</h2>
			</div>
			<div className="products-description">
				<p>
					Webster Locksmiths is home to a super-store and onsite warehouse stocked with hundreds of items available for your purchase.
					<br />
					Whether you are looking for a decorative lockset, mailbox system, safe, plumbing and electrical supplies, or general hardware, we have it.
					<br />
					Webster Locksmiths is a one-stop-shop for all your security product needs.
					<br />
					Check out some of our great products below:
				</p>
			</div>

			<div className="products">
				<ul>
					{products.flatMap((product, index) => (
						<li key={index} className={`slide-${index} ${openProduct === index ? "expanded" : ""} `} onClick={() => setOpenProduct(openProduct === index ? null : index)}>
							<div className="item-header">
								<h3>{product.name}</h3>
								<span className="item-chevron">{openProduct === index ? "🔓" : "🔒"}</span>
							</div>
							<div className="item-body">
								<p>{product.description}</p>
								{/* <div className="image-wrapper"> */}
								<div className="item-body-bottom">
									{/*//!  make a media quarie that will make the item-body-bottom list be horisontal instead of vertical  when view port is bellow width 1400px */}
									<ul>
										{product?.links?.map((l) => (
											// <li key={`${l.title} ${l.Link}`}>
											<div className="item-body-bottom-li">
												<li key={`${l.title}-${l.Link}`}>{l.title}</li>

												<li className="item-body-bottom-link" key={`${l.title}-${l.Link}`}>
													<a href={l.link} target="_blank">
														h
													</a>{" "}
												</li>
											</div>
										))}
									</ul>
									<img src={blankkeys} alt="blankkeys" />
								</div>

								{/* </div> */}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
