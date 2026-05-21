import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Product_services from "./components/Product_services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Test from "./components/Test";
import { useEffect, useState, useRef } from "react";

function App() {
	const [scrolled, setScrolled] = useState(false);
	const [showBtn, setShowBtn] = useState(false);
	const [visibleSections, setVisibleSections] = useState({ banner: true });

	const homeRef = useRef(null);
	const productsRef = useRef(null);
	const servicesRef = useRef(null);
	const galleryRef = useRef(null);
	const aboutRef = useRef(null);

	// for later
	const productRef = useRef(null); // scrolls to products specifically
	const serviceRef = useRef(null); // scrolls to services specifically

	// add expand state to pass down
	const [expandProduct, setExpandProduct] = useState(null);
	const [expandService, setExpandService] = useState(null);

	// navbar scroll state + show scroll-to-top btn
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
			setShowBtn(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollTo = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const [navPosition, setNavPosition] = useState(
		() => localStorage.getItem("navPosition") || "top" // "top" | "left" | "right"
	);

	const changeNavPosition = (pos) => {
		setNavPosition(pos);
		localStorage.setItem("navPosition", pos);
	};

	// // wrap content so it shifts when sidebar is present
	// <div className={`app-wrapper ${navPosition !== "top" ? `sidebar-${navPosition}` : ""}`}></div>;

	// intersection observer — reveal sections on scroll
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log("this is the entry", entry);
					if (entry.isIntersecting) {
						console.log("this is the entry isIntersecting", entry.isIntersecting);
						setVisibleSections((prev) => ({
							...prev,
							[entry.target.id]: true, // key = the div's id
						}));
						observer.unobserve(entry.target); // only trigger once
					}
				});
			},
			{ threshold: 0.45 } // 15% visible is enough to trigger
		);

		const sections = [homeRef.current, productsRef.current, servicesRef.current, galleryRef.current, aboutRef.current];

		sections.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		console.log("visibleSections updated:", visibleSections);
	}, [visibleSections]);

	return (
		<>
			<Routes>
				<Route
					path="*"
					element={
						<div className="app-wrapper">
							<Navbar
								scrolled={scrolled}
								onHomeClick={() => scrollTo(homeRef)}
								onProductsClick={() => scrollTo(productsRef)}
								onProductItemClick={(item) => {
									scrollTo(productRef);
									setExpandProduct(item); // tells the component which item to open
								}}
								onServiceItemClick={(item) => {
									scrollTo(serviceRef);
									setExpandService(item);
								}}
								onAboutClick={() => scrollTo(aboutRef)}
								scrollToTop={scrollToTop}
								navPosition={navPosition}
								onChangeNavPosition={changeNavPosition}
							/>

							{/* each div: one ref, one id, checks its own id */}
							<div ref={homeRef} id="banner" className={visibleSections.banner ? "show" : ""}>
								<Banner />
							</div>

							{/* <div
								ref={productsRef}
								id="products-services"
								
								className={visibleSections.products ? "show" : ""}>
								<Product_services />
							</div> */}

							<div ref={productsRef} id="products" className={visibleSections.products ? "show" : ""}>
								<Product_services productRef={productRef} serviceRef={serviceRef} expandProduct={expandProduct} expandService={expandService} />
							</div>

							<div ref={galleryRef} id="gallery" className={visibleSections.gallery ? "show" : ""}>
								<Gallery />
							</div>

							<div ref={aboutRef} id="footer" className={visibleSections.footer ? "show" : ""}>
								<Footer />
							</div>

							<Test />
						</div>
					}
				/>
			</Routes>

			{/* scroll to top button */}
			{showBtn && (
				<button className="scroll-to-top-btn" onClick={scrollToTop}>
					↑
				</button>
			)}
		</>
	);
}

export default App;

// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
// import Product_services from "./components/Product_services";
// import Gallery from "./components/Gallery";
// import Footer from "./components/Footer";
// import Test from "./components/Test";

// import { useEffect, useState, useRef } from "react";

// function App() {
// 	const [scrolled, setScrolled] = useState(false);

// 	// one ref per section
// 	const homeRef = useRef(null);
// 	const productsRef = useRef(null);
// 	const servicesRef = useRef(null);
// 	const aboutRef = useRef(null);

// 	const [visibleSections, setVisibleSections] = useState({});

// 	useEffect(() => {
// 		const handleScroll = () => setScrolled(window.scrollY > 0);
// 		window.addEventListener("scroll", handleScroll);
// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	// single scroll function — pass the right ref when calling
// 	const scrollTo = (ref) => {
// 		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
// 	};

// 	// function ScrollToTopBtn() {
// 	const [showBtn, setShowBtn] = useState(false);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setShowBtn(window.scrollY > 0);
// 		};
// 		window.addEventListener("scroll", handleScroll);
// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	const scrollToTop = () => {
// 		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// 	};

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				entries.forEach((entry) => {
// 					if (entry.isIntersecting) {
// 						setVisibleSections((prev) => ({
// 							...prev,
// 							[entry.target.id]: true,
// 						}));

// 						observer.unobserve(entry.target);
// 					}
// 				});
// 			},
// 			{
// 				threshold: 0.3,
// 			}
// 		);

// 		const sections = [homeRef.current, productsRef.current, servicesRef.current, aboutRef.current];
// 		console.log("this are the section", sections);

// 		sections.forEach((section) => {
// 			if (section) observer.observe(section);
// 			console.log("this is the current section", section);
// 		});

// 		return () => observer.disconnect();
// 	}, []);

// 	return (
// 		<>
// 			<Routes>
// 				<Route
// 					path="*"
// 					element={
// 						<div className="app-wrapper">
// 							<Navbar scrolled={scrolled} onHomeClick={() => scrollTo(homeRef)} onProductsClick={() => scrollTo(productsRef)} onServicesClick={() => scrollTo(servicesRef)} onAboutClick={() => scrollTo(aboutRef)} scrollToTop={scrollToTop} />

// 							{/* attach refs to a wrapper div on each component */}
// 							<div ref={homeRef} id="banner" ref={homeRef} className={visibleSections.products ? "show" : ""}>
// 								<Banner />
// 							</div>

// 							<div ref={productsRef} id="products" ref={productsRef} className={visibleSections.products ? "show" : ""}>
// 								<Product_services />
// 							</div>

// 							<div ref={servicesRef} id="gallery" className={visibleSections.products ? "show" : ""}>
// 								<Gallery />
// 							</div>

// 							<div ref={aboutRef} id="footer" className={visibleSections.products ? "show" : ""}>
// 								<Footer />
// 							</div>

// 							<Test />
// 						</div>
// 					}
// 				/>
// 			</Routes>
// 		</>
// 	);
// }

// export default App;
