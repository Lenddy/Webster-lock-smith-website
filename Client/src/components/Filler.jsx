import React from "react";
import "../styles/Filler.css";
import logo from "../assets/WebsterSiteLogo.png";
import logoVid from "../assets/logo.mp4";

export default function Filler() {
	return (
		<div className="filler-container">
			<div className="filler-wrapper">
				<div className="filler-item">item 1 top left</div>
				<div className="filler-item">item 2 top right </div>
				<div className="filler-logo">
					<img src={logo} alt="logo" />
					{/* <video src={logoVid} autoPlay muted playsInline /> */}
				</div>
				<div className="filler-item">item 3 bottom left</div>
				<div className="filler-item">item 4 bottom right </div>
			</div>
		</div>
	);
}

// import React from "react";
// import "../styles/Filler.css";
// import logo from "../assets/WebsterSiteLogo.png";
// import logoVid from "../assets/logo.mp4";

// export default function Filler() {
// 	return (
// 		<div className="filler-container">
// 			<div className="filler-wrapper">
// 				<div className="filler-item">item 1 top left</div>
// 				<div className="filler-item">item 2 top right </div>
// 				<div className="filler-logo">
// 					{/* <img src={logo} alt="logo" /> */}
// 					<video src={logoVid} autoPlay muted playsInline />
// 				</div>
// 				<div className="filler-item">item 3 bottom left</div>
// 				<div className="filler-item">item 4 bottom right </div>
// 			</div>
// 		</div>
// 	);
// }
