import { useState, useEffect } from "react";
import { products } from "../utilities/products-services";

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
										{/* //! make the link items not show if they are empty  */}

										{product?.links?.map((l, idx) => (
											// <li key={`${l.title} ${l.Link}`}>
											<div key={idx} className="item-body-bottom-li">
												<li key={`${l.title}-${l.Link}-${idx}`}>{l.title}</li>

												<li className="item-body-bottom-link" key={`${l.title}-${idx}`}>
													<a href={l.link} target="_blank">
														{/* <div className="pop-up"> */}

														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="new-tab">
															<path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
														</svg>

														{/* </div> */}
													</a>
												</li>
											</div>
										))}
									</ul>
									{/* add an array of images that will be displayied for every porduct and services  if they have sub sections (for example whe use thris brand  there will b e a btn that can take you to see the images and anothers smaller btn that can take you to see the website of the manufacturer )*/}

									{product?.links?.filter((imgs) => imgs.img)?.flatMap((imgs) => imgs?.img?.map((imgItem, idx) => <img key={`${idx}-${imgItem.alt}`} src={imgItem.src} alt={imgItem.alt} />))}

									{/* <img src={blankkeys} alt="blankkeys" /> */}
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
