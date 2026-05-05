import "../styles/navbar.css";
import Logo from "../assets/WebsterSiteLogo.png";

function Navbar() {
	/*
		//TODO - 
		make the nav bar  be 20-30px taler and a different color
			once user scroll down the navbar becomes 20-30 px shorter and changes color and maintains that height and color  
			if users scroll up pass a point i will  become taller and change color again 




		products , services and translate will have drop downs (will about have one ? to go there and open the collapse section ?  )


	see if you some how can make the logo  have a animation where the teeth glow (Twinkle Smile)  when first loading the page  

	the idea is that the nav bar is going to nothing then the  logo start getting bigger (scaling) then have the Twinkle Smile then get smaller to fit in the nav bar  then the other elements will start showing the ends will start showing  from  both sides (from the left and righty to the center )

	or another option is to show the the remaining elements from the center to the out side they would have a smaller  scale (they would be come bigger and then shrink to their normal size )

	or have the other element render first  from the out side to the center  (growing and shrinking or moving from the out side to the inside ) then showing the logo with the effect

	this effect would only happen only if the users if at the top of the page 

	in mobile view have the effect for the logo be the same but for the other elements  be a menu that would drop down from the top  and also have the translation logo be combine with a gear wheel  so that you can put  a reduce animations so that the user does not have to see the animation every time  if they dont want to  translated site ]english and Spanish (and also dark /light theme) 

	*/

	return (
		<div className="nav-container">
			{/* <div className="nav-container-left nav-item">
				<div className="nav-left">
					<img src={Logo} alt="" className="logo" />
				</div>
			</div> */}

			{/* <div className="nav-container-center nav-item-center"> */}
			<div className="nav-items">
				<ul>
					<li>
						<h4>Home</h4>
					</li>
					<li>
						<h4>Products</h4>
					</li>
					<li>
						<h4>Services</h4>
					</li>
					<li>
						<div className="logo-container">
							<img src={Logo} alt="" className="logo" />
						</div>
					</li>
					<li>
						<h4>About</h4>
					</li>

					<li>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="LanguageIcon">
							<path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
						</svg>
					</li>
					<li>
						<h4>Careers</h4>
					</li>
				</ul>
			</div>
			{/* <div className="nav-container-right nav-item">
				<div className="nav-right">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="LanguageIcon">
						<path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
					</svg>
					<button className="nav-btn">
						<h4>Careers</h4>
					</button>
				</div>
			</div> */}
		</div>
	);
}

export default Navbar;
