import "../styles/navbar.css";
import Logo from "../assets/WebsterSiteLogo.png";
import video from "../assets/logo.mp4";
import { useEffect, useState } from "react";

function Navbar({ scrolled, scrollToTop, onHomeClick, onAboutClick, oneGalleryClick, onProductsClick, onProductItemClick, onServicesClick, onServiceItemClick, navPosition, onChangeNavPosition, setIsPinned, screenWidth }) {
	const [sidebarExpanded, setSidebarExpanded] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	const [pinned, setPinned] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [openMenu, setOpenMenu] = useState(null);

	const isExpanded = pinned || hovered;

	const toggleMenu = (key) => setOpenMenu(openMenu === key ? null : key);

	if (screenWidth <= 768) {
		return (
			<>
				{/* fixed top bar with burger + logo */}
				<div className={`burger-menu-container ${navPosition === "right" ? "right" : ""}`}>
					<button className="burger-btn" onClick={() => setHovered(!hovered)}>
						{hovered ? "✕" : "☰"}
					</button>
					<div className="burger-logo" onClick={scrollToTop}>
						<video src={video} autoPlay muted playsInline />
					</div>
				</div>

				{/* dark overlay — click to close */}
				<div
					className={`sidebar-overlay ${hovered ? "visible" : ""}`}
					onClick={() => {
						setHovered(false);
						setOpenMenu(null);
					}}
				/>

				{/* sidebar — slides in from left or right */}
				<div className={`sidebar ${navPosition === "right" ? "sidebar-right-pos" : "sidebar-left-pos"} ${hovered ? "sidebar-open" : ""}`}>
					{/* top: logo + close btn */}
					<div className={`sidebar-top ${navPosition === "right" ? "right" : ""}`}>
						<button
							className="sidebar-close-btn"
							onClick={() => {
								setHovered(false);
								setOpenMenu(null);
							}}>
							✕
						</button>

						<div className="sidebar-logo" onClick={scrollToTop}>
							<video src={video} autoPlay muted playsInline className="sidebar-logo-img" />
						</div>
					</div>

					{/* nav items */}
					<nav className="sidebar-nav">
						<div className="sidebar-menu">
							<button
								className="sidebar-menu-title"
								onClick={() => {
									onHomeClick();
									setHovered(false);
								}}>
								<span className="sidebar-icon">🏠</span>
								<span className="sidebar-menu-label">Home</span>
							</button>
						</div>

						<div className="sidebar-menu">
							<button
								className="sidebar-menu-title"
								onClick={() => {
									onAboutClick();
									setHovered(false);
								}}>
								<span className="sidebar-icon">ℹ️</span>
								<span className="sidebar-menu-label">About</span>
							</button>
						</div>

						<div className="sidebar-menu">
							<button
								className={`sidebar-menu-title ${openMenu === "products" ? "active" : ""}`}
								// className={`sidebar-menu-title `}
								onClick={() => {
									onProductsClick();
									toggleMenu("products");
								}}>
								<span className="sidebar-icon">🔒</span>
								<span className="sidebar-menu-label">Products</span>
								<span className="sidebar-menu-chevron">{openMenu === "products" ? "▴" : "▾"}</span>
							</button>
							{/* <div className={`sidebar-menu-links open ${openMenu === "products" ? "open" : ""}`}> */}
							<div className={`sidebar-menu-links open`}>
								<a
									onClick={() => {
										onProductItemClick(0);
										setHovered(false);
									}}>
									Residential Locks
								</a>
								<a
									onClick={() => {
										onProductItemClick(1);
										setHovered(false);
									}}>
									Commercial Locks
								</a>
								<a
									onClick={() => {
										onProductItemClick(2);
										setHovered(false);
									}}>
									Smart Locks
								</a>

								<a
									onClick={() => {
										onProductItemClick(3);
										setHovered(false);
									}}>
									Safes & Vaults
								</a>
							</div>
						</div>

						<div className="sidebar-menu">
							<button
								className={`sidebar-menu-title ${openMenu === "services" ? "active" : ""}`}
								onClick={() => {
									onProductsClick();
									toggleMenu("services");
								}}>
								<span className="sidebar-icon">🔑</span>
								<span className="sidebar-menu-label">Services</span>
								<span className="sidebar-menu-chevron">{openMenu === "services" ? "▴" : "▾"}</span>
							</button>
							{/* <div className={`sidebar-menu-links ${openMenu === "services" ? "open" : ""}`}> */}
							<div className={`sidebar-menu-links open `}>
								<a
									onClick={() => {
										onServiceItemClick(0);
										setHovered(false);
									}}>
									Emergency Lockout
								</a>
								<a
									onClick={() => {
										onServiceItemClick(1);
										setHovered(false);
									}}>
									Lock Installation
								</a>
								<a
									onClick={() => {
										onServiceItemClick(2);
										setHovered(false);
									}}>
									Rekeying
								</a>

								<a
									onClick={() => {
										onServiceItemClick(3);
										setHovered(false);
									}}>
									Key Duplication
								</a>
							</div>
						</div>

						<div className="sidebar-menu">
							<button
								className="sidebar-menu-title"
								onClick={() => {
									oneGalleryClick();
									setHovered(false);
								}}>
								<span className="sidebar-icon">🖼️</span>
								<span className="sidebar-menu-label">Gallery</span>
							</button>
						</div>
					</nav>

					{/* bottom settings */}
					<div className="sidebar-bottom">
						<div className="sidebar-menu">
							<button className={`sidebar-menu-title ${openMenu === "settings" ? "active" : ""}`} onClick={() => toggleMenu("settings")}>
								<span className="sidebar-icon">⚙️</span>
								<span className="sidebar-menu-label">Settings</span>
								<span className="sidebar-menu-chevron">{openMenu === "settings" ? "▴" : "▾"}</span>
							</button>
							<div className={`sidebar-menu-links ${openMenu === "settings" ? "open" : ""}`}>
								<a onClick={() => onChangeNavPosition("left")}>◀ Sidebar left</a>
								<a onClick={() => onChangeNavPosition("right")}>Sidebar right ▶</a>
								<a href="#">🌐 English</a>
								<a href="#">🌐 Español</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	// top navbar
	if (navPosition === "top") {
		return (
			<div className={`nav-container ${scrolled ? "nav-scrolled" : ""}`}>
				<div className="nav-items">
					<ul>
						<li className="nav-left-2">
							<h4 onClick={onHomeClick}>
								Home <span className="chevron">▾</span>
							</h4>
							<div className="nav-dropdown-menu">
								<a onClick={onHomeClick}>Overview</a>
							</div>
						</li>

						<li className="nav-left-1">
							<h4 onClick={onProductsClick}>
								Products & Services <span className="chevron">▾</span>
							</h4>
							<div className="nav-dropdown-menu">
								<div>
									<a onClick={() => onProductItemClick(0)}>Residential Locks</a>
									<a onClick={() => onProductItemClick(1)}>Commercial Locks</a>
									<a onClick={() => onProductItemClick(2)}>Smart Locks</a>
									<a onClick={() => onProductItemClick(3)}> Safes & Vaults</a>
								</div>

								<div>
									<a onClick={() => onServiceItemClick(0)}>Emergency Lockout</a>
									<a onClick={() => onServiceItemClick(1)}>Lock Installation</a>
									<a onClick={() => onServiceItemClick(2)}>Rekeying</a>
									<a onClick={() => onServiceItemClick(3)}> Key Duplication</a>
								</div>
							</div>
						</li>

						<li>
							<div className="logo-container logo-animate" onClick={scrollToTop}>
								<video src={video} autoPlay muted playsInline className="logo" />
							</div>
						</li>

						<li className="nav-right-1">
							<h4 onClick={onAboutClick}>About</h4>
						</li>

						{/* settings dropdown with position switcher */}
						<li className="nav-right-2">
							<h4>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="settingIcon">
									<path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
								</svg>
								<span className="chevron">▾</span>
							</h4>
							<div className="nav-dropdown-menu">
								<a onClick={() => onChangeNavPosition("left")}>◀ Sidebar left</a>
								<a onClick={() => onChangeNavPosition("right")}>Sidebar right ▶</a>
								<a href="#">English</a>
								<a href="#">Español</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}

	// sidebar (left or right)

	// sidebar JSX
	return (
		<div
			className={`sidebar ${navPosition === "right" ? "sidebar-right-pos" : "sidebar-left-pos"} ${isExpanded ? "sidebar-expanded" : ""} ${pinned ? "sidebar-pinned" : "sidebar-hover"}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => {
				setHovered(false);
				setOpenMenu(null);
			}}>
			{/* top: pin button + logo */}
			<div className="sidebar-top">
				<div className="sidebar-logo" onClick={scrollToTop}>
					<video src={video} autoPlay muted playsInline className="sidebar-logo-img" />
				</div>
				{/* pin button — only visible when expanded */}
				{isExpanded && (
					<button
						className={`sidebar-pin-btn ${pinned ? "pinned" : ""}`}
						onClick={() => {
							(setPinned(!pinned), setIsPinned(!pinned));
						}}
						title={pinned ? "Unpin sidebar" : "Pin sidebar"}>
						{pinned ? "📌" : "📍"}
					</button>
				)}
			</div>

			{/* nav items */}
			<nav className="sidebar-nav">
				{/* Home */}
				<div className="sidebar-menu">
					<button className="sidebar-menu-title" onClick={onHomeClick}>
						<span className="sidebar-icon">🏠</span>
						<span className="sidebar-menu-label">Home</span>
					</button>
				</div>

				{/* About */}
				<div className="sidebar-menu">
					<button className="sidebar-menu-title" onClick={onAboutClick}>
						<span className="sidebar-icon">ℹ️</span>
						<span className="sidebar-menu-label">About</span>
					</button>
				</div>

				{/* Products */}
				<div className="sidebar-menu">
					<button
						// className={`sidebar-menu-title ${openMenu === "products" ? "active" : ""}`}
						className={`sidebar-menu-title  `}
						onClick={() => {
							onProductsClick();
							toggleMenu("products");
						}}>
						<span className="sidebar-icon">🔒</span>
						<span className="sidebar-menu-label">Products</span>
						<span className="sidebar-menu-chevron">{openMenu === "products" ? "▴" : "▾"}</span>
					</button>
					{/* <div className={`sidebar-menu-links ${openMenu === "products" ? "open" : ""}`}> */}
					<div className={`sidebar-menu-links open `}>
						<a onClick={() => onProductItemClick(0)}>Residential Locks</a>
						<a onClick={() => onProductItemClick(1)}>Commercial Locks</a>
						<a onClick={() => onProductItemClick(2)}>Smart Locks</a>
						<a onClick={() => onProductItemClick(3)}> Safes & Vaults</a>
					</div>
				</div>

				{/* Services */}
				<div className="sidebar-menu">
					<button
						// className={`sidebar-menu-title ${openMenu === "services" ? "active" : ""}`}
						className={`sidebar-menu-title `}
						onClick={() => {
							onServicesClick();
							toggleMenu("services");
						}}>
						<span className="sidebar-icon">🔑</span>
						<span className="sidebar-menu-label">Services</span>
						<span className="sidebar-menu-chevron">{openMenu === "services" ? "▴" : "▾"}</span>
					</button>
					{/* <div className={`sidebar-menu-links ${openMenu === "services" ? "open" : ""}`}> */}
					<div className={`sidebar-menu-links open `}>
						<a onClick={() => onServiceItemClick(0)}>Emergency Lockout</a>
						<a onClick={() => onServiceItemClick(1)}>Lock Installation</a>
						<a onClick={() => onServiceItemClick(2)}>Rekeying</a>
						<a onClick={() => onServiceItemClick(3)}> Key Duplication</a>
					</div>
				</div>

				{/* About */}
				<div className="sidebar-menu">
					<button className="sidebar-menu-title" onClick={oneGalleryClick}>
						<span className="sidebar-icon">🖼️</span>
						<span className="sidebar-menu-label">Gallery</span>
					</button>
				</div>
			</nav>

			{/* bottom settings */}
			<div className="sidebar-bottom">
				<div className="sidebar-menu">
					<button className={`sidebar-menu-title ${openMenu === "settings" ? "active" : ""}`} onClick={() => toggleMenu("settings")}>
						<span className="sidebar-icon">⚙️</span>
						<span className="sidebar-menu-label">Settings</span>
						<span className="sidebar-menu-chevron">{openMenu === "settings" ? "▴" : "▾"}</span>
					</button>
					{/* <div className={`sidebar-menu-links ${openMenu === "settings" ? "open" : ""}`}> */}
					<div className={`sidebar-menu-links open`}>
						<a onClick={() => onChangeNavPosition("top")}>⬆ Top navbar</a>
						<a onClick={() => onChangeNavPosition("left")}>◀ Sidebar left</a>
						<a onClick={() => onChangeNavPosition("right")}>Sidebar right ▶</a>
						<a href="#">🌐 English</a>
						<a href="#">🌐 Español</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
