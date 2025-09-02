import { useCallback } from 'react'
import { useSelector } from 'react-redux'

const ValidationErrors = () => {
	const { error } = useSelector(state => state.auth)

	const errorMessage = useCallback(() => {
		return Object.keys(error).map(name => {
			const messages = error[name].join(', ')
			return `${name} - ${messages}`
		})
	}, [error])

	return (
		error !== null &&
		errorMessage().map(error => (
			<div className='alert alert-danger m-1 p-1' role='alert' key={error}>
				{error}
			</div>
		))
	)
}

export default ValidationErrors
