import { useEffect, useState } from "react";

const PREFIX = "whatsapp-clone-";

export default function useLocalStorage(key, initialValue) {
	const preFixedKey = PREFIX + key;
	const [value, setValue] = useState(() => {
		const jasonValue = localStorage.getItem(preFixedKey);
		if (jasonValue != null) return JSON.parse(jasonValue);
		if (typeof initialValue === "function") {
			return initialValue();
		} else {
			return initialValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(preFixedKey, JSON.stringify(value));
	}, [preFixedKey, value]);

	return [value, setValue];
}
