import { useState, useEffect } from "react";
import { products } from "../utilities/products-services";
import ImageCarousel from "./ImageCarousel";

export default function Products({ productRef, expandProduct }) {
	const [openProduct, setOpenProduct] = useState(null);

	useEffect(() => {
		if (expandProduct !== null) setOpenProduct(expandProduct);
	}, [expandProduct]);

	const toggleProduct = (index) => {
		setOpenProduct((prev) => (prev === index ? null : index));
	};

	const [visibleSections, setVisibleSections] = useState({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleSections({ [entry.target.id]: true });
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.4 }
		);
		if (productRef.current) observer.observe(productRef.current);
		return () => observer.disconnect();
	}, []);

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
					{products.map((product, index) => {
						const isOpen = openProduct === index;

						const carouselSlides = (product.links || [])
							.filter((l) => l.title || l.link || l.img?.length)
							.map((l, idx) => ({
								id: `${index}-${l.title || "link"}-${idx}`,
								title: l.title,
								// destination: l.,
								// des: "test",
								// add this field in products-services.js later if you want per-image subtitles
								image: l.img?.[0]?.src,
								link: l.link,
							}));

						console.log("this is the carousel slides", carouselSlides);

						return (
							<li key={index} className={`slide-${index} ${isOpen ? "expanded" : ""}`}>
								{/* only this row toggles open/close now — buttons and links
								    inside the body can never bubble up into it */}
								<div className="item-header" onClick={() => toggleProduct(index)}>
									<h3>{product.name}</h3>
									<span className="item-chevron">{isOpen ? "🔓" : "🔒"}</span>
								</div>

								<div className="item-body-collapse">
									<div className="item-body">
										<p>{product.description}</p>

										{carouselSlides.length > 0 && <ImageCarousel slides={carouselSlides} isOpen={isOpen} intervalMs={4000} />}

										<button type="button" className="item-close" onClick={() => toggleProduct(index)}>
											▲ Close
										</button>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
