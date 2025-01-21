export const saveToLocalStorage = <T>(key: string, data: T): void => {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		console.error(error);
	}
};

export const loadFromLocalStorage = <T>(key: string): T | null => {
	try {
		const data = localStorage.getItem(key);
		return data ? (JSON.parse(data) as T) : null;
	} catch (error) {
		console.error(error);
		return null;
	}
};
