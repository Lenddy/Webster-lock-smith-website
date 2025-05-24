import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Product_services from "./components/Product_services";
import Gallery from "./components/Gallery";

function App() {
	return (
		<>
			<Routes>
				{/* <Route path= element={<Navbar />} > */}
				<Route
					exact
					path="*"
					element={
						<>
							<Navbar />
							<Banner />
							<Product_services />
							<Gallery />
						</>
					}
				/>
				{/* <Route exact path="/hello" element={<Navbar />}></Route> */}
			</Routes>
		</>
	);
}

export default App;
