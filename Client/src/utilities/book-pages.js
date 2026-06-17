import front from "../assets/banner/Webster-Front.jpg";
import blankKeys from "../assets/general/blank-keys-on-wall.webp";
import general from "../assets/general/general-1.png";

// ── page content — add/remove pages here freely
const PAGES = [
	{
		front: {
			type: "cover",
			title: "Webster Locksmith",
			sub: "Est. 1949 · New York City",
		},
		back: {
			type: "text",
			heading: "Our Story",
			body: "Webster Lock and Hardware Co. Inc was founded in 1949 by Mike and Ann Miller. A family business built on trust, craftsmanship, and community.",
		},
	},
	{
		front: {
			type: "text",
			heading: "The Family",
			body: "Today their son Allan Miller serves as CEO, and his son David Miller is Vice President of Operations. Three generations of dedicated service to New York.",
		},
		back: {
			type: "image",
			src: front,
			alt: "Webster Locksmith storefront",
		},
	},
	{
		front: {
			type: "text",
			heading: "Our Fleet",
			body: "Forty radio-dispatched vehicles serve residential and commercial customers throughout the New York metro area — 24 hours a day, 7 days a week.",
		},
		back: {
			type: "image",
			src: blankKeys,
			alt: "Keys on wall",
		},
	},
	{
		front: {
			type: "image",
			src: general,
			alt: "Webster team",
		},
		back: {
			type: "text",
			heading: "What We Do",
			body: "Residential lockouts · Commercial security · Automotive keys & fobs · Lock installation & rekeying · Safe installation & repair · Access control systems.",
		},
	},
	{
		front: {
			type: "text",
			heading: "Contact Us",
			body: "(718) 733-2200\nservice@websterlock.com\n\nLicensed & Insured\nNew York State Licensed Locksmith",
		},
		back: {
			type: "closing",
			title: "Webster Locksmith",
			sub: "Trusted since 1949",
		},
	},
];

export default PAGES;
