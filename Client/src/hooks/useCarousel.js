import { useState, useEffect, useCallback } from "react";

export function useCarousel(items, interval = 4000, auto = true) {
	const [current, setCurrent] = useState(0);

	const next = useCallback(() => {
		setCurrent((prev) => (prev + 1) % items.length);
	}, [items.length]);

	const prev = useCallback(() => {
		setCurrent((prev) => (prev - 1 + items.length) % items.length);
	}, [items.length]);

	const goTo = (index) => setCurrent(index);

	useEffect(() => {
		if (!auto || items.length <= 1) return;
		const timer = setInterval(next, interval);
		return () => clearInterval(timer);
	}, [next, interval, auto, items.length]);

	return { current, next, prev, goTo };
}
