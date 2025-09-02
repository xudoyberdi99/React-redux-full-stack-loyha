import { Route, Routes } from 'react-router-dom'
import { Navbar, Register, Login,Main } from './components'
import AuthService from './service/auth'
import { useEffect } from 'react'
import { getItem } from './helpers/persistance-storage'
import Articles from './service/articles' 
import { useDispatch } from 'react-redux'
import { getArticlesStart,getArticlesSuccess } from './slice/article' 

const App = () => {
  const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const res = await AuthService.getUser()
		} catch (error) {
			console.log(error)
		}
	}
  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const res = await Articles.getArticles()
      dispatch(getArticlesSuccess(res.articles))  
    } catch (error) {
      console.log(error)
    }
  }
	useEffect(() => {
		const token = getItem('token')
		if (token) getUser()
    getArticles()
	}, [])

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
