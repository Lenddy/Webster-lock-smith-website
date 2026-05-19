import { useState, useEffect, useCallback, useRef } from "react";

export function useCarousel(items, interval = 4000, auto = true) {
	const [current, setCurrent] = useState(0);
	const pauseRef = useRef(false); // tracks if user manually navigated

	const next = useCallback(() => {
		setCurrent((prev) => (prev + 1) % items.length);
	}, [items.length]);

	const prev = useCallback(() => {
		setCurrent((prev) => (prev - 1 + items.length) % items.length);
	}, [items.length]);

	// goTo — pauses auto-play for 6 seconds then resumes from new position
	const goTo = useCallback((index) => {
		setCurrent(index);
		pauseRef.current = true;
		setTimeout(() => {
			pauseRef.current = false;
		}, 6000); // resume after 6s — adjust to your liking
	}, []);

	const nextManual = useCallback(() => {
		setCurrent((prev) => (prev + 1) % items.length);
		pauseRef.current = true;
		setTimeout(() => {
			pauseRef.current = false;
		}, 6000);
	}, [items.length]);

	const prevManual = useCallback(() => {
		setCurrent((prev) => (prev - 1 + items.length) % items.length);
		pauseRef.current = true;
		setTimeout(() => {
			pauseRef.current = false;
		}, 6000);
	}, [items.length]);

	useEffect(() => {
		if (!auto || items.length <= 1) return;

		const timer = setInterval(() => {
			if (!pauseRef.current) {
				next(); // continues from wherever current is — no reset
			}
		}, interval);

		return () => clearInterval(timer);
	}, [next, interval, auto, items.length]);

	// return { current, next, prev, goTo };
	return { current, next, prev, nextManual, prevManual, goTo };
}
