import { Route, Routes } from 'react-router-dom'
import { Navbar, Register, Login } from './components'
import AuthService from './service/auth'
import { useEffect } from 'react'
import { getItem } from './helpers/persistance-storage'

const App = () => {
	const getUser = async () => {
		try {
			const res = await AuthService.getUser()
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const token = getItem('token')
		if (token) getUser()
	}, [])

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<h1>Home Page</h1>} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
