import front from "../assets/banner/front-store-1.jpg";
import banner from "../assets/banner/banner-services.png";
import general from "../assets/general/general-1.png";
import blankkeys from "../assets/general/blank-keys-on-wall.webp";
import test from "../assets/general/s-l400.webp";

export const bannerImages = [
	{ src: front, alt: "Webster front", title: "Since 1949", sub: "Trusted security" },
	{ src: banner, alt: "Services banner", title: "Full Service", sub: "Lock & security solutions" },
	{ src: general, alt: "General", title: "Residential", sub: "Home locksmith services" },
	{ src: blankkeys, alt: "Blank keys", title: "Key Cutting", sub: "All key types" },
	{ src: test, alt: "Services", title: "Commercial", sub: "Business security" },
].map((item) => ({
	...item,
	angle: `${(Math.random() * 20 - 10).toFixed(2)}deg`,
}));
