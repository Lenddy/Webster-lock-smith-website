import "../styles/navbar.css";
import Logo from "../assets/WebsterSiteLogo.png";

function Navbar({ scrolled }) {
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

	/* TODO

	make the dropdown  for the element s of the navbar
	1 when user is at the top of the page the nav bar is taller and the back ground color should be --ch
	2 after scroll make the nav bar be shorter (and maybe make the nab bar items smaller ? ) and the color should  be -lb
	
	3 home  ,product,  services and translate should be drop down (change the logo of the translation icon to a translation icon that has a gear wheel)
	*/

	return (
		<div className={`nav-container  expand  ${scrolled ? "nav-scrolled" : ""}`}>
			{/* <div className="nav-container-left nav-item">
				<div className="nav-left">
					<img src={Logo} alt="" className="logo" />
				</div>
			</div> */}

			{/* <div className="nav-container-center nav-item-center"> */}
			<div className="nav-items">
				<ul>
					<li>
						<h4>
							Home <span className="chevron">▾</span>
						</h4>
						<div className="nav-dropdown-menu">
							<a href="#">Placeholder</a>
							<a href="#">Placeholder</a>
							<a href="#">Placeholder</a>
						</div>
					</li>

					<li>
						<h4>
							Products
							<span className="chevron">▾</span>
						</h4>
						<div className="nav-dropdown-menu">
							<a href="#">Placeholder</a>
							<a href="#">Placeholder</a>
							<a href="#">Placeholder</a>
						</div>
					</li>

					<li>
						<h4>
							Services
							<span className="chevron">▾</span>
						</h4>
						<div className="nav-dropdown-menu">
							<a href="#">Placeholder</a>
							<a href="#">Placeholder</a>
							<a href="#">Placeholder</a>
						</div>
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
						<h4>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="settingIcon">
								<path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
							</svg>

							{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="LanguageIcon">
								<path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
							</svg> */}

							<span className="chevron">▾</span>
						</h4>
						<div className="nav-dropdown-menu">
							<a href="#">
								{" "}
								<div>
									<span>
										{" "}
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="LanguageIcon">
											<path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
										</svg>{" "}
									</span>

									<span>Placeholder</span>
								</div>
							</a>
							<a href="#">
								<div>
									<span>
										{" "}
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="LanguageIcon">
											<path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
										</svg>{" "}
									</span>

									<span>Placeholder</span>
								</div>
							</a>
							<a href="#">Placeholder</a>
						</div>
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
