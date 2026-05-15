import React from "react";
import "../styles/footer.css";

function Footer() {
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
						<h4>Home</h4>
						<ul>
							<li></li>
							<li>link 2 </li>
							<li>link 3</li>
							<li>link 4</li>
						</ul>
					</div>
					<div className="links-container">
						<h4>Areas we service</h4>
						<ul>
							<li>Bx</li>
							<li>um</li>
							<li>bk</li>
							<li>qns</li>
							<li>lm</li>
						</ul>
					</div>
					<div className="links-container">
						<h4>social media</h4>
						<ul>
							<li>link 1</li>
							<li>link 2 </li>
							<li>link 3</li>
						</ul>
					</div>

					{/* <div className="links-container">
						<h4>social media</h4>
						<ul>
							<li>link 1</li>
							<li>link 2 </li>
							<li>link 3</li>
							<li>link 4</li>
							<li>link 5 </li>
							<li>link 6</li>
							<li>link 7</li>
						</ul>
					</div> */}
				</div>

				<div className="schedule-container">
					<div className="schedule">
						<h4>Contact us</h4>
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
