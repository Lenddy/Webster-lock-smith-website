import React from "react";
import "../styles/footer.css";
import creditAplication from "../assets/webster_lock_credit_application.pdf";

import email from "../assets/general/email-1573-svgrepo-com.svg";
import linkedIn from "../assets/general/linkedin-svgrepo-com.svg";
import yelp from "../assets/general/yelp-color-svgrepo-com.svg";

function Footer({ scrolled, scrollToTop, onHomeClick, onAboutClick, oneGalleryClick, onProductsClick, onProductItemClick, onServiceItemClick }) {
	// you should  have a function that get the current year for the the copy rights section
	// add the credit aplication  form

	/* 
	so one links container will be for the nave bar utilization 
	one would be for the website utilities  (back ground color ,language  , reduced animation )
	one will be for the credit form 
	*/

	// TODO give indication with litle arrows that the uses can scroll to the left of right (make them be clickable)

	// TODO fix the height of the footer so that is not soo big

	return (
		<div className="footer-container">
			<div className="footer-content-container">
				<div className="useful-links-container">
					<div className="links-container">
						<h2>Main menu</h2>
						<ul className="links-wrapper">
							<div className="links-container-inner-wrapper">
								<li
									onClick={() => {
										onHomeClick();
									}}>
									<p>Home</p>
								</li>
								<li
									onClick={() => {
										onAboutClick();
									}}>
									<p>About</p>
								</li>
								<li
									onClick={() => {
										oneGalleryClick();
									}}>
									<p>Gallery</p>
								</li>
							</div>

							<div className="links-container-inner-wrapper">
								<h2>Useful info</h2>

								<ul>
									<li>
										<a href={creditAplication} target="_blank">
											<p>Credit Aplication</p>
										</a>
										{/* type="application/pdf */}
									</li>
									{/* this is to give credit and let every body know where did i take the pictures and icons from  */}
									<li>
										<p>Attribution</p>
									</li>
									{/* this should go un der the attribution section*/}
									<li>
										<p>icons</p>
									</li>
								</ul>
							</div>
						</ul>
					</div>

					<div className="links-container">
						<h2
							className="links-container-pointer"
							onClick={() => {
								onProductsClick();
							}}>
							Products
						</h2>
						<ul>
							<li>
								<p
									onClick={() => {
										onProductItemClick(0);
									}}>
									{" "}
									Residential Locks
								</p>
							</li>

							<li>
								{" "}
								<p
									onClick={() => {
										onProductItemClick(1);
									}}>
									Commercial Locks
								</p>
							</li>
							<li>
								<p
									onClick={() => {
										onProductItemClick(2);
									}}>
									Smart Locks
								</p>
							</li>
						</ul>
					</div>
					<div className="links-container">
						<h2
							className="links-container-pointer"
							onClick={() => {
								onProductsClick();
							}}>
							Services
						</h2>
						<ul>
							<li>
								<p
									onClick={() => {
										onServiceItemClick(0);
										// setHovered(false);
									}}>
									Emergency Lockout
								</p>
							</li>
							<li>
								<p
									onClick={() => {
										onServiceItemClick(1);
										// setHovered(false);
									}}>
									Lock Installation{" "}
								</p>
							</li>
							<li>
								<p
									onClick={() => {
										onServiceItemClick(2);
										// setHovered(false);
									}}>
									Rekeying{" "}
								</p>
							</li>
						</ul>
					</div>
					<div className="links-container">
						<h2>Areas we service</h2>

						<ul>
							<li>
								<p>The Bronx</p>
							</li>
							<li>
								<p>Manhattan</p>
							</li>
							<li>
								<p>Brooklyn</p>
							</li>
							<li>
								<p>Queens</p>
							</li>
						</ul>
					</div>

					<div className="links-container">
						<h2>Contact Us</h2>

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

			<div className="footer-bottom-container">
				<div className="footer-social-container">
					<ul>
						<li>
							<a href="https://www.yelp.com/biz/webster-lock-and-hardware-bronx" target="_blank">
								<img src={yelp} alt="yelp logo" />{" "}
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/webster-lock-nyc/" target="_blank">
								{" "}
								<img src={linkedIn} alt="linkedIn logo" />{" "}
							</a>{" "}
						</li>
					</ul>
				</div>
				<h3>Webster Lock & Hardware Co. 2026 © All Rights Reserved</h3>
			</div>
		</div>
	);
}

export default Footer;

// <div className="footer-container">
// 	<div className="footer-content-container">
// 		<div className="useful-links-container">
// 			<div className="links-container">
// 				<h2>Main menu</h2>
// 				<ul className="links-wrapper">
// 					<div className="links-container-inner-wrapper">
// 						<li
// 							onClick={() => {
// 								onHomeClick();
// 							}}>
// 							<p>Home</p>
// 						</li>
// 						<li
// 							onClick={() => {
// 								onAboutClick();
// 							}}>
// 							<p>About</p>
// 						</li>
// 						<li
// 							onClick={() => {
// 								oneGalleryClick();
// 							}}>
// 							<p>Gallery</p>
// 						</li>
// 					</div>

// 					<div className="links-container-inner-wrapper">
// 						<h2>Useful info</h2>

// 						<ul>
// 							<li>
// 								<p>Credit Aplication</p>
// 							</li>
// 							{/* this is to give credit and let every body know where did i take the pictures and icons from  */}
// 							<li>
// 								<p>Attribution</p>
// 							</li>
// 							{/* this should go un der the attribution section*/}
// 							<li>
// 								<p>icons</p>
// 							</li>
// 						</ul>
// 					</div>
// 				</ul>
// 			</div>

// 			<div className="links-container">
// 				<h2
// 					onClick={() => {
// 						onProductsClick();
// 					}}>
// 					Products
// 				</h2>
// 				<ul>
// 					<li>
// 						<p
// 							onClick={() => {
// 								onProductItemClick(0);
// 							}}>
// 							{" "}
// 							Residential Locks
// 						</p>
// 					</li>

// 					<li>
// 						{" "}
// 						<p
// 							onClick={() => {
// 								onProductItemClick(1);
// 							}}>
// 							Commercial Locks
// 						</p>
// 					</li>
// 					<li>
// 						<p
// 							onClick={() => {
// 								onProductItemClick(2);
// 							}}>
// 							Smart Locks
// 						</p>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="links-container">
// 				<h2>Services</h2>
// 				<ul>
// 					<li>
// 						<p
// 							onClick={() => {
// 								onServiceItemClick(0);
// 								// setHovered(false);
// 							}}>
// 							Emergency Lockout
// 						</p>
// 					</li>
// 					<li>
// 						<p
// 							onClick={() => {
// 								onServiceItemClick(1);
// 								// setHovered(false);
// 							}}>
// 							Lock Installation{" "}
// 						</p>
// 					</li>
// 					<li>
// 						<p
// 							onClick={() => {
// 								onServiceItemClick(2);
// 								// setHovered(false);
// 							}}>
// 							Rekeying{" "}
// 						</p>
// 					</li>
// 				</ul>
// 			</div>

// 			<div className="links-container">
// 				<h2>Areas we service</h2>

// 				<ul>
// 					<li>
// 						<p>The Bronx</p>
// 					</li>
// 					<li>
// 						<p>Manhattan</p>
// 					</li>
// 					<li>
// 						<p>Brooklyn</p>
// 					</li>
// 					<li>
// 						<p>Queens</p>
// 					</li>
// 				</ul>
// 			</div>

// 			<div className="links-container">
// 				<h2>Contact Us</h2>

// 				<div>
// 					<p>
// 						Webster Lock & Hardware Co. <br />
// 						2471 Webster Avenue Bronx, NY 10458 <br />
// 						(718) 733-2200 <br />
// 						Hours Monday—Friday: 8:00AM–6:00PM <br />
// 						Saturday: 8:00AM–5:00PM <br />
// 						Sunday: CLOSED
// 					</p>
// 				</div>
// 			</div>
// 		</div>

// 		{/* <div className="schedule-container">
// 			<div className="links-container service-areas">
// 				<h2>Areas we service</h2>

// 				<ul>
// 					<li>
// 						<p>The Bronx</p>
// 					</li>
// 					<li>
// 						<p>Manhattan</p>
// 					</li>
// 					<li>
// 						<p>Brooklyn</p>
// 					</li>
// 					<li>
// 						<p>Queens</p>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="schedule">
// 				<h2>Contact Us</h2>

// 				<div>
// 					<p>Webster Lock & Hardware Co. </p>
// 					<p>2471 Webster Avenue Bronx, NY 10458</p>
// 					<p>(718) 733-2200</p>
// 				</div>

// 				<div>
// 					<p>Hours Monday—Friday: 8:00AM–6:00PM </p>
// 					<p>Saturday: 8:00AM–5:00PM</p>
// 					<p>Sunday: CLOSED</p>
// 				</div>
// 			</div>
// 		</div> */}
// 	</div>

// 	<div className="footer-bottom-container">
// 		<div className="footer-social-container">
// 			<ul>
// 				<li>yelp</li>
// 				<li>linkin</li>
// 				<li>Email</li>
// 			</ul>
// 		</div>
// 		<h3>Webster Lock & Hardware Co. 2026 © All Rights Reserved</h3>
// 	</div>
// </div>
