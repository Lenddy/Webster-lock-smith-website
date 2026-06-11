import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Product_services from "./components/Product_services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Test from "./components/Test";
import { useEffect, useState, useRef } from "react";

import calcClampBreakpoints from "../../min-max-calculator";

function App() {
	const [scrolled, setScrolled] = useState(false);
	const [showBtn, setShowBtn] = useState(false);
	const [visibleSections, setVisibleSections] = useState({ banner: true });

	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const productsRef = useRef(null);
	const servicesRef = useRef(null);
	const galleryRef = useRef(null);
	const footerRef = useRef(null);

	// for later
	const productRef = useRef(null); // scrolls to products specifically
	const serviceRef = useRef(null); // scrolls to services specifically

	// add expand state to pass down
	const [expandProduct, setExpandProduct] = useState(null);
	const [expandService, setExpandService] = useState(null);

	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

	const [isPinned, setIsPinned] = useState();

	const changeNavPosition = (pos) => {
		setNavPosition(pos);
		localStorage.setItem("navPosition", pos);
	};

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

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
			{ threshold: 0.35 } // 3
			// 5% visible is enough to trigger
		);

		const sections = [homeRef.current, aboutRef.current, productsRef.current, servicesRef.current, galleryRef.current, footerRef.current];

		sections.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		console.log("visibleSections updated:", visibleSections);
	}, [visibleSections]);

	// TODO go look at the Bronx locksmith website https://www.bronxlocksmith.com/ for inspiration
	// TODO go look at the Mr lock website https://mr-locks.com/ for inspiration

	console.log(calcClampBreakpoints("1rem", "0.8rem", 1, "1.8rem"));

	// move the about section lower

	return (
		<>
			<Routes>
				<Route
					path="*"
					element={
						<div className="app-wrapper">
							{/* <div className="app-nav-bar"> */}
							<Navbar
								scrolled={scrolled}
								onHomeClick={() => scrollTo(homeRef)}
								onAboutClick={() => scrollTo(aboutRef)}
								oneGalleryClick={() => scrollTo(galleryRef)}
								onProductsClick={() => scrollTo(productsRef)}
								onServicesClick={() => scrollTo(serviceRef)}
								onProductItemClick={(item) => {
									scrollTo(productRef);
									setExpandProduct(item); // tells the component which item to open
								}}
								onServiceItemClick={(item) => {
									scrollTo(serviceRef);
									setExpandService(item);
								}}
								scrollToTop={scrollToTop}
								navPosition={navPosition}
								onChangeNavPosition={changeNavPosition}
								setIsPinned={setIsPinned}
								screenWidth={screenWidth}
							/>
							{/* </div> */}

							<div className={`app-content ${navPosition} ${isPinned ? "isPinned" : ""}`}>
								{/* each div: one ref, one id, checks its own id */}
								<div ref={homeRef} id="banner" className={visibleSections.banner ? "show" : ""}>
									<Banner screenWidth={screenWidth} />
								</div>

								<div ref={galleryRef} id="gallery" className={visibleSections.gallery ? "show" : ""}>
									<Gallery />
								</div>

								<div ref={productsRef} id="products" className={visibleSections.products ? "show" : ""}>
									<Product_services productRef={productRef} serviceRef={serviceRef} expandProduct={expandProduct} expandService={expandService} />
								</div>

								<div ref={aboutRef} id="about" className={visibleSections.about ? "show" : ""}>
									<About />
								</div>

								<div ref={footerRef} id="footer" className={visibleSections.footer ? "show" : ""}>
									<Footer
										scrolled={scrolled}
										onHomeClick={() => scrollTo(homeRef)}
										onAboutClick={() => scrollTo(aboutRef)}
										oneGalleryClick={() => scrollTo(galleryRef)}
										onProductsClick={() => scrollTo(productsRef)}
										onProductItemClick={(item) => {
											scrollTo(productRef);
											setExpandProduct(item); // tells the component which item to open
										}}
										onServiceItemClick={(item) => {
											scrollTo(serviceRef);
											setExpandService(item);
										}}
										scrollToTop={scrollToTop}
									/>
								</div>

								<Test />
							</div>
						</div>
					}
				/>
			</Routes>

			{/* scroll to top button */}
			{showBtn && (
				<button className={`scroll-to-top-btn ${navPosition}`} onClick={scrollToTop}>
					↑
				</button>
			)}
		</>
	);
}

export default App;
