import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Product_services from "./components/Product_services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
function App() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Routes>
				{/* <Route path= element={<Navbar />} > */}
				<Route
					exact
					path="*"
					element={
						<>
							<Navbar scrolled={scrolled} />
							<Banner />
							<Product_services />
							<Gallery />
							<Footer />
						</>
					}
				/>
				{/* <Route exact path="/hello" element={<Navbar />}></Route> */}
			</Routes>
		</>
	);
}

export default App;
