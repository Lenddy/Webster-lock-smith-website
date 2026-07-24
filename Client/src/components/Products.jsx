import { useState, useEffect } from "react";
import { products } from "../utilities/products-services";

//! old ImageCarousel
// function ImageCarousel({ slides, isOpen, intervalMs = 4000 }) {
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	const count = slides.length;

// 	const goTo = (index) => setActiveIndex(((index % count) + count) % count);
// 	const handleNext = () => goTo(activeIndex + 1);
// 	const handlePrev = () => goTo(activeIndex - 1);

// 	// auto-rotate, only while this product is expanded — resets on every
// 	// change to activeIndex, so a manual click naturally restarts the timer
// 	// instead of fighting it
// 	useEffect(() => {
// 		if (!isOpen || count <= 1) return;
// 		const id = setInterval(() => {
// 			setActiveIndex((prev) => (prev + 1) % count);
// 		}, intervalMs);
// 		return () => clearInterval(id);
// 	}, [isOpen, count, intervalMs, activeIndex]);

// 	// collapsing the product resets it, so it doesn't reopen mid-rotation later
// 	useEffect(() => {
// 		if (!isOpen) setActiveIndex(0);
// 	}, [isOpen]);

// 	if (count === 0) return null;
// 	const active = slides[activeIndex];

// 	return (
// 		<div className="carousel">
// 			<div className="carousel-stack">
// 				{slides.map((slide, i) => {
// 					// distance of this slide from the active one, wrapped 0..count-1 —
// 					// this is the whole fix for the prev/next symmetry problem:
// 					// next() and prev() just shift this number by +1/-1, so both
// 					// directions run through identical math

// 					// this needs to change to dynamically use the amount of slots depending on the array of objects

// 					const slot = (i - activeIndex + count) % count;
// 					let slotClass = "slot-hidden";
// 					if (slot === 0) slotClass = "slot-active";
// 					else if (slot === count - 1) slotClass = "slot-behind";
// 					else if (slot === 1) slotClass = "slot-1";
// 					else if (slot === 2) slotClass = "slot-2";
// 					else if (slot === 3) slotClass = "slot-3";

// 					return <div key={slide.id} className={`ic-slide ${slotClass}`} style={{ backgroundImage: slide.image ? `url(${slide.image})` : undefined }} />;
// 				})}
// 			</div>

// 			{/* fixed panel — only the text inside swaps per slide, the panel itself never moves */}
// 			<div className="carousel-info" key={active.id}>
// 				{active.name && <div className="carousel-info-title">{active.name}</div>}
// 				{active.des && <div className="carousel-info-des">{active.des}</div>}
// 				{active.link && (
// 					<a className="carousel-info-link" href={active.link} target="_blank" rel="noopener noreferrer">
// 						See more
// 					</a>
// 				)}
// 			</div>

// 			{count > 1 && (
// 				<div className="carousel-controls">
// 					<button type="button" className="carousel-prev" onClick={handlePrev}>
// 						◁
// 					</button>
// 					<button type="button" className="carousel-next" onClick={handleNext}>
// 						▷
// 					</button>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

//! old ImageCarousel 2
// function ImageCarousel({ slides, isOpen, intervalMs = 1500 }) {
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	const [isPaused, setIsPaused] = useState(false);
// 	const count = slides.length;

// 	const goTo = (index) => setActiveIndex(((index % count) + count) % count);
// 	const handleNext = () => goTo(activeIndex + 1);
// 	const handlePrev = () => goTo(activeIndex - 1);

// 	useEffect(() => {
// 		if (!isOpen || isPaused || count <= 1) return;
// 		const id = setInterval(() => {
// 			setActiveIndex((prev) => (prev + 1) % count);
// 		}, intervalMs);
// 		return () => clearInterval(id);
// 	}, [isOpen, isPaused, count, intervalMs, activeIndex]);

// 	// no more reset-on-close — activeIndex just stays put until the user
// 	// (or auto-rotate) changes it again, so reopening resumes where it left off

// 	if (count === 0) return null;
// 	const active = slides[activeIndex];

// 	return (
// 		<div className="carousel">
// 			<div className="carousel-stack">
// 				{slides.map((slide, i) => {
// 					// generalized N-thumbnail model: slot 0 is active, slots 1-3 are
// 					// real visible thumbnails (CSS decides how many show per breakpoint),
// 					// anything further is the hidden reserve queue waiting its turn
// 					const slot = (i - activeIndex + count) % count;
// 					let slotClass = "slot-hidden";
// 					if (slot === 0) slotClass = "slot-active";
// 					else if (slot <= 3) slotClass = `slot-${slot}`;

// 					return <div key={slide.id} className={`ic-slide ${slotClass}`} style={{ backgroundImage: slide.image ? `url(${slide.image})` : undefined }} />;
// 				})}
// 			</div>

// 			<div className="carousel-info" key={active.id}>
// 				{active.name && <div className="carousel-info-title">{active.name}</div>}
// 				{active.des && <div className="carousel-info-des">{active.des}</div>}
// 				{/* #4 — already dynamic: this only renders at all when active.link is truthy */}
// 				{active.link && (
// 					<a className="carousel-info-link" href={active.link} target="_blank" rel="noopener noreferrer">
// 						See more
// 					</a>
// 				)}
// 			</div>

// 			{count > 1 && (
// 				<div className="carousel-controls">
// 					<button type="button" className="carousel-prev" onClick={handlePrev}>
// 						◁
// 					</button>
// 					<button type="button" className="carousel-pause" onClick={() => setIsPaused((p) => !p)} aria-label={isPaused ? "Play" : "Pause"}>
// 						{isPaused ? "▶" : "⏸"}
// 					</button>
// 					<button type="button" className="carousel-next" onClick={handleNext}>
// 						▷
// 					</button>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

function ImageCarousel({ slides, isOpen, intervalMs = 1500 }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const count = slides.length;

	const goTo = (index) => setActiveIndex(((index % count) + count) % count);
	const handleNext = () => goTo(activeIndex + 1);
	const handlePrev = () => goTo(activeIndex - 1);

	useEffect(() => {
		if (!isOpen || isPaused || count <= 1) return;
		const id = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % count);
		}, intervalMs);
		return () => clearInterval(id);
	}, [isOpen, isPaused, count, intervalMs, activeIndex]);

	if (count === 0) return null;
	const active = slides[activeIndex];

	return (
		<div className="carousel">
			<div className="carousel-stack">
				{slides.map((slide, i) => {
					const slot = (i - activeIndex + count) % count;
					let slotClass = "slot-hidden";
					if (slot === 0) slotClass = "slot-active";
					else if (slot === count - 1) slotClass = "slot-behind";
					else if (slot <= 3) slotClass = `slot-${slot}`;

					return <div key={slide.id} className={`ic-slide ${slotClass}`} style={{ backgroundImage: slide.image ? `url(${slide.image})` : undefined }} />;
				})}
			</div>

			<div className="carousel-info" key={active.id}>
				{active.name && <div className="carousel-info-title">{active.name}</div>}
				{active.des && <div className="carousel-info-des">{active.des}</div>}
				{active.link && (
					<a className="carousel-info-link" href={active.link} target="_blank" rel="noopener noreferrer">
						See more
					</a>
				)}
			</div>

			{count > 1 && (
				<div className="carousel-controls">
					<button type="button" className="carousel-prev" onClick={handlePrev}>
						◁
					</button>
					<button type="button" className="carousel-pause" onClick={() => setIsPaused((p) => !p)} aria-label={isPaused ? "Play" : "Pause"}>
						{isPaused ? "▶" : "⏸"}
					</button>
					<button type="button" className="carousel-next" onClick={handleNext}>
						▷
					</button>
				</div>
			)}
		</div>
	);
}

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
								name: l.title,
								des: l.des, // add this field in products-services.js later if you want per-image subtitles
								image: l.img?.[0]?.src,
								link: l.link,
							}));

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

// !!!!!!!!!old
// import { useState, useEffect } from "react";
// import { products } from "../utilities/products-services";

// import { Link } from "react-router-dom";

// export default function Products({ productRef, expandProduct }) {
// 	const [openProduct, setOpenProduct] = useState(null);

// 	// when navbar dropdown item is clicked, open that item
// 	useEffect(() => {
// 		if (expandProduct !== null) setOpenProduct(expandProduct);
// 	}, [expandProduct]);

// 	const toggleProduct = (index) => {
// 		setOpenProduct(openProduct === index ? null : index);
// 	};

// 	const [visibleSections, setVisibleSections] = useState({});

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				entries.forEach((entry) => {
// 					console.log("this is the entry", entry);
// 					if (entry.isIntersecting) {
// 						console.log("this is the entry isIntersecting", entry.isIntersecting);
// 						// setVisibleSections((prev) => ({
// 						// 	// ...prev,
// 						// 	[entry.target.id]: true, // key = the div's id
// 						// }));

// 						setVisibleSections({
// 							// ...prev,
// 							[entry.target.id]: true, // key = the div's id
// 						});
// 						observer.unobserve(entry.target); // only trigger once
// 					}
// 				});
// 			},
// 			{ threshold: 0.4 } // 3
// 			// 5% visible is enough to trigger
// 		);

// 		// const sections = productsRef.current;

// 		// sections.forEach((section) => {
// 		if (productRef.current) observer.observe(productRef.current);
// 		// });

// 		return () => observer.disconnect();
// 	}, []);

// 	useEffect(() => {
// 		console.log("visibleSections from products updated:", visibleSections);
// 	}, [visibleSections]);

// 	// const slides = [
// 	// 	{
// 	// 		id: "scotland",
// 	// 		name: "Scotland",
// 	// 		des: "Experience the mystical Highlands under twilight skies and misty lochs.",
// 	// 		image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
// 	// 		link: "https://github.com/MDJAmin",
// 	// 	},
// 	// 	{
// 	// 		id: "norway",
// 	// 		name: "Norway",
// 	// 		des: "Chase the Northern Lights under star-lit skies along scenic fjord roads.",
// 	// 		image: "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0",
// 	// 		link: "https://github.com/MDJAmin",
// 	// 	},
// 	// 	{
// 	// 		id: "new-zealand",
// 	// 		name: "New Zealand",
// 	// 		des: "Wander dramatic, mist-laden mountain paths that feel straight out of a dream.",
// 	// 		image: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
// 	// 		link: "https://github.com/MDJAmin",
// 	// 	},
// 	// 	{
// 	// 		id: "japan",
// 	// 		name: "Japan",
// 	// 		des: "Discover serene mountain temples shrouded in dusk and ancient forest trails.",
// 	// 		image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
// 	// 		link: "https://github.com/MDJAmin",
// 	// 	},
// 	// ];

// 	function Carousel() {
// 		const [items, setItems] = useState(slides);

// 		// equivalent of: document.querySelector(".slide").appendChild(items[0])
// 		const handleNext = () => {
// 			setItems((prev) => {
// 				const [first, ...rest] = prev;
// 				return [...rest, first];
// 			});
// 		};

// 		// equivalent of: document.querySelector(".slide").prepend(items[items.length - 1])
// 		const handlePrev = () => {
// 			setItems((prev) => {
// 				const last = prev[prev.length - 1];
// 				return [last, ...prev.slice(0, -1)];
// 			});
// 		};

// 		return (
// 			<div className="container">
// 				<div className="slide">
// 					{items.map((item) => (
// 						<div key={item.id} className="item" style={{ backgroundImage: `url('${item.image}')` }}>
// 							<div className="content">
// 								<div className="name">{item.name}</div>
// 								<div className="des">{item.des}</div>
// 								<a className="seeMore" target="_blank" rel="noopener noreferrer" href={item.link}>
// 									<button>See More</button>
// 								</a>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 				<div className="button">
// 					<button className="prev" onClick={handlePrev}>
// 						◁
// 					</button>
// 					<button className="next" onClick={handleNext}>
// 						▷
// 					</button>
// 				</div>
// 			</div>
// 		);
// 	}

// function ImageCarousel({ slides, isOpen, intervalMs = 4000 }) {
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	const count = slides.length;

// 	const goTo = (index) => setActiveIndex(((index % count) + count) % count);
// 	const handleNext = () => goTo(activeIndex + 1);
// 	const handlePrev = () => goTo(activeIndex - 1);

// 	// auto-rotate, only while this product is expanded — resets on every
// 	// change to activeIndex, so a manual click naturally restarts the timer
// 	// instead of fighting it
// 	useEffect(() => {
// 		if (!isOpen || count <= 1) return;
// 		const id = setInterval(() => {
// 			setActiveIndex((prev) => (prev + 1) % count);
// 		}, intervalMs);
// 		return () => clearInterval(id);
// 	}, [isOpen, count, intervalMs, activeIndex]);

// 	// collapsing the product resets it, so it doesn't reopen mid-rotation later
// 	useEffect(() => {
// 		if (!isOpen) setActiveIndex(0);
// 	}, [isOpen]);

// 	if (count === 0) return null;
// 	const active = slides[activeIndex];

// 	return (
// 		<div className="carousel">
// 			<div className="carousel-stack">
// 				{slides.map((slide, i) => {
// 					// distance of this slide from the active one, wrapped 0..count-1 —
// 					// this is the whole fix for the prev/next symmetry problem:
// 					// next() and prev() just shift this number by +1/-1, so both
// 					// directions run through identical math
// 					const slot = (i - activeIndex + count) % count;
// 					let slotClass = "slot-hidden";
// 					if (slot === 0) slotClass = "slot-active";
// 					else if (slot === count - 1) slotClass = "slot-behind";
// 					else if (slot === 1) slotClass = "slot-1";
// 					else if (slot === 2) slotClass = "slot-2";
// 					else if (slot === 3) slotClass = "slot-3";

// 					return <div key={slide.id} className={`ic-slide ${slotClass}`} style={{ backgroundImage: slide.image ? `url(${slide.image})` : undefined }} />;
// 				})}
// 			</div>

// 			{/* fixed panel — only the text inside swaps per slide, the panel itself never moves */}
// 			<div className="carousel-info" key={active.id}>
// 				{active.name && <div className="carousel-info-title">{active.name}</div>}
// 				{active.des && <div className="carousel-info-des">{active.des}</div>}
// 				{active.link && (
// 					<a className="carousel-info-link" href={active.link} target="_blank" rel="noopener noreferrer">
// 						See more
// 					</a>
// 				)}
// 			</div>

// 			{count > 1 && (
// 				<div className="carousel-controls">
// 					<button type="button" className="carousel-prev" onClick={handlePrev}>
// 						◁
// 					</button>
// 					<button type="button" className="carousel-next" onClick={handleNext}>
// 						▷
// 					</button>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// 	return (
// 		<div className={`products-container ${visibleSections.products ? "show" : ""} `} ref={productRef} id="products">
// 			<div className="products-title">
// 				<h2>Products</h2>
// 			</div>

// 			<div className="products-description">
// 				<p>
// 					Webster Locksmiths is home to a super-store and onsite warehouse stocked with hundreds of items available for your purchase.
// 					<br />
// 					Whether you are looking for a decorative lockset, mailbox system, safe, plumbing and electrical supplies, or general hardware, we have it.
// 					<br />
// 					Webster Locksmiths is a one-stop-shop for all your security product needs.
// 					<br />
// 					Check out some of our great products below:
// 				</p>
// 			</div>

// 			<div className="products">
// 				<ul>
// 					{products.flatMap((product, index) => (
// 						<li key={index} className={`slide-${index} ${openProduct === index ? "expanded" : ""} `} onClick={() => setOpenProduct(openProduct === index ? null : index)}>
// 							<div className="item-header">
// 								<h3>{product.name}</h3>
// 								<span className="item-chevron">{openProduct === index ? "🔓" : "🔒"}</span>
// 							</div>

// 							<div className="item-body-collapse">
// 								<div className="item-body">
// 									<div className="item-body-bottom">{/* <Carousel /> */}</div>

// 									<p>{product.description}</p>
// 									<div className="image-wrapper">
// 										<div className="item-body-bottom">
// 											{/*//!  make a media quarie that will make the item-body-bottom list be horisontal instead of vertical  when view port is bellow width 1400px */}

// 											{/* the one problem is that the clicks go to the collapsable sections when clikning the next or previouse bottom    */}

// 											{/* the other thing is that i would have to make the carousel auto rotate */}

// 											{/* and the description   */}

// 											{/* !!!!! this is the o ld content of the sections */}
// 											<Carousel />

// 											{/* !!!!! this is the old content of the sections  */}
// 											<ul className="link-cards">
// 												{product?.links
// 													?.filter((l) => l.title || l.link || l.img?.length)
// 													.map((l, idx) => (
// 														<li key={`${l.title || "link"}-${idx}`} className="link-card" style={l.img?.[0]?.src ? { backgroundImage: `url(${l.img[0].src})` } : undefined}>
// 															<div className="link-card-overlay" />
// 															<div className="link-card-content">
// 																{l.title && <span className="link-card-title">{l.title}</span>}

// 																{l.link && (
// 																	<a
// 																		href={l.link}
// 																		target="_blank"
// 																		rel="noopener noreferrer"
// 																		className="link-card-cta"
// 																		onClick={(e) => e.stopPropagation()} // keep the card click from also toggling the collapse
// 																	>
// 																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="new-tab">
// 																			<path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
// 																		</svg>
// 																	</a>
// 																)}
// 															</div>
// 														</li>
// 													))}
// 											</ul>

// 											{/* add an array of images that will be displayied for every porduct and services  if they have sub sections (for example whe use thris brand  there will b e a btn that can take you to see the images and anothers smaller btn that can take you to see the website of the manufacturer )*/}

// 											{/* {product?.links?.filter((imgs) => imgs.img)?.flatMap((imgs) => imgs?.img?.map((imgItem, idx) => <img key={`${idx}-${imgItem.alt}`} src={imgItem.src} alt={imgItem.alt} />))} */}

// 											{/* <img src={blankkeys} alt="blankkeys" /> */}
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import { useState, useEffect } from "react";
// import { products } from "../utilities/products-services";

// import { Link } from "react-router-dom";

// export default function Products({ productRef, expandProduct }) {
// 	const [openProduct, setOpenProduct] = useState(null);

// 	// when navbar dropdown item is clicked, open that item
// 	useEffect(() => {
// 		if (expandProduct !== null) setOpenProduct(expandProduct);
// 	}, [expandProduct]);

// 	const toggleProduct = (index) => {
// 		setOpenProduct(openProduct === index ? null : index);
// 	};

// 	const [visibleSections, setVisibleSections] = useState({});

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				entries.forEach((entry) => {
// 					console.log("this is the entry", entry);
// 					if (entry.isIntersecting) {
// 						console.log("this is the entry isIntersecting", entry.isIntersecting);
// 						// setVisibleSections((prev) => ({
// 						// 	// ...prev,
// 						// 	[entry.target.id]: true, // key = the div's id
// 						// }));

// 						setVisibleSections({
// 							// ...prev,
// 							[entry.target.id]: true, // key = the div's id
// 						});
// 						observer.unobserve(entry.target); // only trigger once
// 					}
// 				});
// 			},
// 			{ threshold: 0.4 } // 3
// 			// 5% visible is enough to trigger
// 		);

// 		// const sections = productsRef.current;

// 		// sections.forEach((section) => {
// 		if (productRef.current) observer.observe(productRef.current);
// 		// });

// 		return () => observer.disconnect();
// 	}, []);

// 	useEffect(() => {
// 		console.log("visibleSections from products updated:", visibleSections);
// 	}, [visibleSections]);

// let next = document.querySelector(".next");
// let prev = document.querySelector(".prev");

// next.addEventListener("click", function () {
//   let items = document.querySelectorAll(".item");
//   document.querySelector(".slide").appendChild(items[0]);
// });

// prev.addEventListener("click", function () {
//   let items = document.querySelectorAll(".item");
//   document.querySelector(".slide").prepend(items[items.length - 1]);
// });

// 	return (
// 		<div className={`products-container ${visibleSections.products ? "show" : ""} `} ref={productRef} id="products">
// 			<div className="products-title">
// 				<h2>Products</h2>
// 			</div>
// 			<div className="products-description">
// 				<p>
// 					Webster Locksmiths is home to a super-store and onsite warehouse stocked with hundreds of items available for your purchase.
// 					<br />
// 					Whether you are looking for a decorative lockset, mailbox system, safe, plumbing and electrical supplies, or general hardware, we have it.
// 					<br />
// 					Webster Locksmiths is a one-stop-shop for all your security product needs.
// 					<br />
// 					Check out some of our great products below:
// 				</p>
// 			</div>

// 			<div className="products">
// 				<ul>
// 					{products.flatMap((product, index) => (
// 						<li key={index} className={`slide-${index} ${openProduct === index ? "expanded" : ""} `} onClick={() => setOpenProduct(openProduct === index ? null : index)}>
// 							<div className="item-header">
// 								<h3>{product.name}</h3>
// 								<span className="item-chevron">{openProduct === index ? "🔓" : "🔒"}</span>
// 							</div>

// 							<div className="item-body-collapse">
// 								<div className="item-body">
// 									<p>{product.description}</p>
// 									{/* <div className="image-wrapper"> */}
// 									<div className="item-body-bottom">
// 										{/*//!  make a media quarie that will make the item-body-bottom list be horisontal instead of vertical  when view port is bellow width 1400px */}
// 										<ul className="link-cards">
// 											{product?.links
// 												?.filter((l) => l.title || l.link || l.img?.length)
// 												.map((l, idx) => (

// 													<li key={`${l.title || "link"}-${idx}`} className="link-card" style={l.img?.[0]?.src ? { backgroundImage: `url(${l.img[0].src})` } : undefined}>
// 														<div className="link-card-overlay" />
// 														<div className="link-card-content">
// 															{l.title && <span className="link-card-title">{l.title}</span>}

// 															{l.link && (
// 																<a
// 																	href={l.link}
// 																	target="_blank"
// 																	rel="noopener noreferrer"
// 																	className="link-card-cta"
// 																	onClick={(e) => e.stopPropagation()} // keep the card click from also toggling the collapse
// 																>
// 																	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="new-tab">
// 																		<path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
// 																	</svg>
// 																</a>
// 															)}
// 														</div>

// 													</li>

// 												))}
// 										</ul>

// 										{/* add an array of images that will be displayied for every porduct and services  if they have sub sections (for example whe use thris brand  there will b e a btn that can take you to see the images and anothers smaller btn that can take you to see the website of the manufacturer )*/}

// 										{product?.links?.filter((imgs) => imgs.img)?.flatMap((imgs) => imgs?.img?.map((imgItem, idx) => <img key={`${idx}-${imgItem.alt}`} src={imgItem.src} alt={imgItem.alt} />))}

// 										{/* <img src={blankkeys} alt="blankkeys" /> */}
// 									</div>

// 									{/* </div> */}
// 								</div>
// 							</div>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import { useState, useEffect } from "react";
// import { products } from "../utilities/products-services";

// import { Link } from "react-router-dom";

// export default function Products({ productRef, expandProduct }) {
// 	const [openProduct, setOpenProduct] = useState(null);

// 	// when navbar dropdown item is clicked, open that item
// 	useEffect(() => {
// 		if (expandProduct !== null) setOpenProduct(expandProduct);
// 	}, [expandProduct]);

// 	const toggleProduct = (index) => {
// 		setOpenProduct(openProduct === index ? null : index);
// 	};

// 	const [visibleSections, setVisibleSections] = useState({});

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				entries.forEach((entry) => {
// 					console.log("this is the entry", entry);
// 					if (entry.isIntersecting) {
// 						console.log("this is the entry isIntersecting", entry.isIntersecting);
// 						// setVisibleSections((prev) => ({
// 						// 	// ...prev,
// 						// 	[entry.target.id]: true, // key = the div's id
// 						// }));

// 						setVisibleSections({
// 							// ...prev,
// 							[entry.target.id]: true, // key = the div's id
// 						});
// 						observer.unobserve(entry.target); // only trigger once
// 					}
// 				});
// 			},
// 			{ threshold: 0.4 } // 3
// 			// 5% visible is enough to trigger
// 		);

// 		// const sections = productsRef.current;

// 		// sections.forEach((section) => {
// 		if (productRef.current) observer.observe(productRef.current);
// 		// });

// 		return () => observer.disconnect();
// 	}, []);

// 	useEffect(() => {
// 		console.log("visibleSections from products updated:", visibleSections);
// 	}, [visibleSections]);

// 	return (
// 		<div className={`products-container ${visibleSections.products ? "show" : ""} `} ref={productRef} id="products">
// 			<div className="products-title">
// 				<h2>Products</h2>
// 			</div>
// 			<div className="products-description">
// 				<p>
// 					Webster Locksmiths is home to a super-store and onsite warehouse stocked with hundreds of items available for your purchase.
// 					<br />
// 					Whether you are looking for a decorative lockset, mailbox system, safe, plumbing and electrical supplies, or general hardware, we have it.
// 					<br />
// 					Webster Locksmiths is a one-stop-shop for all your security product needs.
// 					<br />
// 					Check out some of our great products below:
// 				</p>
// 			</div>

// 			<div className="products">
// 				<ul>
// 					{products.flatMap((product, index) => (
// 						<li key={index} className={`slide-${index} ${openProduct === index ? "expanded" : ""} `} onClick={() => setOpenProduct(openProduct === index ? null : index)}>
// 							<div className="item-header">
// 								<h3>{product.name}</h3>
// 								<span className="item-chevron">{openProduct === index ? "🔓" : "🔒"}</span>
// 							</div>

// 							<div className="item-body-collapse">
// 								<div className="item-body">
// 									<p>{product.description}</p>
// 									{/* <div className="image-wrapper"> */}
// 									<div className="item-body-bottom">
// 										{/*//!  make a media quarie that will make the item-body-bottom list be horisontal instead of vertical  when view port is bellow width 1400px */}
// 										<ul>
// 											{/* //! make the link items not show if they are empty  */}

// 											{product?.links?.map((l, idx) => (
// 												// <li key={`${l.title} ${l.Link}`}>
// 												<div key={idx} className="item-body-bottom-li">
// 													<li key={`${l.title}-${l.Link}-${idx}`}>{l.title}</li>

// 													<li className="item-body-bottom-link" key={`${l.title}-${idx}`}>
// 														<a href={l.link} target="_blank">
// 															{/* <div className="pop-up"> */}

// 															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="new-tab">
// 																<path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
// 															</svg>

// 															{/* </div> */}
// 														</a>
// 													</li>
// 												</div>
// 											))}
// 										</ul>

// 										{/* add an array of images that will be displayied for every porduct and services  if they have sub sections (for example whe use thris brand  there will b e a btn that can take you to see the images and anothers smaller btn that can take you to see the website of the manufacturer )*/}

// 										{product?.links?.filter((imgs) => imgs.img)?.flatMap((imgs) => imgs?.img?.map((imgItem, idx) => <img key={`${idx}-${imgItem.alt}`} src={imgItem.src} alt={imgItem.alt} />))}

// 										{/* <img src={blankkeys} alt="blankkeys" /> */}
// 									</div>

// 									{/* </div> */}
// 								</div>
// 							</div>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }
