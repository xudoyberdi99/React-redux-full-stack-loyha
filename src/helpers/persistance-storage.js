export const setItem = (key, data) => {
	try {
		localStorage.setItem(key, data)
	} catch (error) {
		console.error('Set item error', error)
	}
}
