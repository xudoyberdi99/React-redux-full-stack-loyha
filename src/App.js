import { Route, Routes } from 'react-router-dom'
import { Navbar, Register, Login, Main, ArticleDetail,CreateArticle, ArticleEdit } from './components'
import AuthService from './service/auth'
import { useEffect } from 'react'
import { getItem } from './helpers/persistance-storage'

const App = () => {
	const getUser = async () => {
		try {
			 await AuthService.getUser()
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
			<div className='container'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/article/:slug' element={<ArticleDetail />} />
          <Route path='/create-article' element={<CreateArticle />} />
          <Route path='/edit-article/:slug' element={<ArticleEdit/>} />
				</Routes>
			</div>
		</div>
	)
}

export default App
