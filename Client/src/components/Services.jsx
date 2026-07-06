import React from "react";
import { services } from "../utilities/products-services";
import { useState, useEffect } from "react";
import blankkeys from "../assets/general/blank-keys-on-wall.webp";

export default function Services({ serviceRef, expandService }) {
	const [openService, setOpenService] = useState(null);

	const [visibleSections, setVisibleSections] = useState({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log("this is the entry", entry);
					if (entry.isIntersecting) {
						console.log("this is the entry isIntersecting", entry.isIntersecting);
						// setVisibleSections((prev) => ({
						// 	// ...prev,
						// 	[entry.target.id]: true, // key = the div's id
						// }));
						setVisibleSections({
							// ...prev,
							[entry.target.id]: true, // key = the div's id
						});
						observer.unobserve(entry.target); // only trigger once
					}
				});
			},
			{ threshold: 0.4 } // 3
			// 5% visible is enough to trigger
		);

		// const sections = productsRef.current;

		// sections.forEach((section) => {
		if (serviceRef.current) observer.observe(serviceRef.current);
		// });

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		console.log("visibleSections from services updated:", visibleSections);
	}, [visibleSections]);

	useEffect(() => {
		if (expandService !== null) setOpenService(expandService);
	}, [expandService]);

	return (
		<div className={`services-container ${visibleSections.services ? "show" : ""}`} ref={serviceRef} id="services">
			<div className="services-title">
				{" "}
				<h2>Services</h2>
			</div>
			<div className="services-description">
				<p>
					Webster Lock has a complete suite of services to keep your home, business, and automobiles safe and secure. Our team of over 50 uniformed service technicians and more than 40 vehicles cover the 5 boroughs of New York City with the state-of-the-art equipment needed to solve your problems professionally and quickly.
					<br />
					Here is a list of our major service areas.!
				</p>
			</div>
			<div className="services">
				<ul>
					{services.map((service, index) => (
						<li key={index} className={`service-slide-${index} ${openService === index ? "expanded" : ""} `} onClick={() => setOpenService(openService === index ? null : index)}>
							<div className="item-header">
								<h3>{service.name}</h3>
								<span className="item-chevron">{openService === index ? "🔓" : "🔒"}</span>
							</div>
							<div className="item-body">
								<p>{service.description}</p>
								<div>
									<img src={blankkeys} alt="blankkeys" />
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
