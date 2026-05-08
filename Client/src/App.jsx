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

	// one ref per section
	const homeRef = useRef(null);
	const productsRef = useRef(null);
	const servicesRef = useRef(null);
	const aboutRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 0);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// single scroll function — pass the right ref when calling
	const scrollTo = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<>
			<Routes>
				<Route
					path="*"
					element={
						<>
							<Navbar scrolled={scrolled} onHomeClick={() => scrollTo(homeRef)} onProductsClick={() => scrollTo(productsRef)} onServicesClick={() => scrollTo(servicesRef)} onAboutClick={() => scrollTo(aboutRef)} />

							{/* attach refs to a wrapper div on each component */}
							<div ref={homeRef}>
								<Banner />
							</div>

							<div ref={productsRef || servicesRef}>
								<Product_services />
							</div>

							{/* <div ref={servicesRef}> */}
							<Gallery />
							{/* </div> */}

							<div ref={aboutRef}>
								<Footer />
							</div>

							<Test />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
