export const setItem = (key, data) => {
	try {
		localStorage.setItem(key, data)
	} catch (error) {
		console.error('Set item error', error)
	}
}

export const getItem = key => {
	try {
		return localStorage.getItem(key)
	} catch (error) {
		console.error('Get item error')
	}
}

export const removeItem = key => {
	try {
		localStorage.removeItem(key)
	} catch (error) {
		console.error('Remove item error', error)
	}
}
