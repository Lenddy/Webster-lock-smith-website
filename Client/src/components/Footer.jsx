import React from "react";
import "../styles/footer.css";

function Footer({ scrolled, scrollToTop, onHomeClick, onAboutClick, oneGalleryClick, onProductsClick, onProductItemClick, onServiceItemClick }) {
	// you should  have a function that get the current year for the the copy rights section
	// add the credit aplication  form

	/* 
	so one links container will be for the nave bar utilization 
	one would be for the website utilities  (back ground color ,language  , reduced animation )
	one will be for the credit form 
	*/
	return (
		<div className="footer-container">
			<div className="footer-content-container">
				<div className="useful-links-container">
					<div className="links-container">
						<h3>Main menu</h3>
						<ul>
							<li>Home</li>
							<li>About</li>

							<div className="sidebar-menu">
								<button
									// className={`sidebar-menu-title ${openMenu === "products" ? "active" : ""}`}
									className={`sidebar-menu-title }`}
									// className={`sidebar-menu-title `}
									onClick={() => {
										onProductsClick();
									}}>
									<span className="sidebar-icon">🔒 Products</span>
									<span className="sidebar-menu-label">Products</span>
									<span className="sidebar-menu-chevron">{/* {openMenu === "products" ? "▴" : "▾"}  */}▾</span>
								</button>
								{/* <div className={`sidebar-menu-links open ${openMenu === "products" ? "open" : ""}`}> */}
								<div className={`sidebar-menu-links open`}>
									<a
										onClick={() => {
											onProductItemClick(0);
										}}>
										Residential Locks
									</a>
									<a
										onClick={() => {
											onProductItemClick(1);
										}}>
										Commercial Locks
									</a>
									<a
										onClick={() => {
											onProductItemClick(2);
										}}>
										Smart Locks
									</a>
								</div>
							</div>

							<div className="sidebar-menu">
								<button
									// className={`sidebar-menu-title ${openMenu === "products" ? "active" : ""}`}
									className={`sidebar-menu-title }`}
									// className={`sidebar-menu-title `}
									onClick={() => {
										onProductsClick();
										// toggleMenu("products");
									}}>
									<span className="sidebar-icon">🔒 Products</span>
									<span className="sidebar-menu-label">Products</span>
									<span className="sidebar-menu-chevron">{/* {openMenu === "products" ? "▴" : "▾"}  */}▾</span>
								</button>
								{/* <div className={`sidebar-menu-links open ${openMenu === "products" ? "open" : ""}`}> */}
								<div className={`sidebar-menu-links open`}>
									<a
										onClick={() => {
											// onProductItemClick(0);
											// setHovered(false);
										}}>
										Residential Locks
									</a>
									<a
										onClick={() => {
											// onProductItemClick(1);
											// setHovered(false);
										}}>
										Commercial Locks
									</a>
									<a
										onClick={() => {
											// onProductItemClick(2);
											// setHovered(false);
										}}>
										Smart Locks
									</a>
								</div>
							</div>
						</ul>
					</div>
					<div className="links-container">
						<h3>Useful info</h3>
						<ul>
							<li>Credit Aplication</li>
							{/* this is to give credit and let every body know where did i take the pictures and icons from  */}
							<li>Attribution</li>
							{/* this should go un der the attribution section*/}
							<li>icons</li>
						</ul>
					</div>
					<div className="links-container">
						<h3>Socials</h3>
						<ul>
							<li>yelp</li>
							<li>linkin</li>
							<li>Email</li>
						</ul>
					</div>
				</div>

				<div className="schedule-container">
					<div className="links-container">
						<h3>
							<h3>Areas we service</h3>
						</h3>
						<ul>
							<li>The Bronx</li>
							<li>Manhattan</li>
							<li>Brooklyn</li>
							<li>Queens</li>
						</ul>
					</div>
					<div className="schedule">
						<h3>Contact us</h3>
						<div>
							<p>Webster Lock & Hardware Co. </p>
							<p>2471 Webster Avenue Bronx, NY 10458</p>
							<p>(718) 733-2200</p>
						</div>

						<div>
							<p>Hours Monday—Friday: 8:00AM–6:00PM </p>
							<p>Saturday: 8:00AM–5:00PM</p>
							<p>Sunday: CLOSED</p>
						</div>
					</div>
				</div>
			</div>

			<h3>Webster Lock & Hardware Co. 2026 © All Rights Reserved</h3>
		</div>
	);
}

export default Footer;
