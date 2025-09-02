import icon from '../Logo/LogoDesktop.png'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
import { Input } from '../ui'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthService from '../service/auth'
import { ValidationError } from './'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const { isLoading,loggedIn } = useSelector(state => state.auth)
	const navigate = useNavigate()

	const loginHandler = async e => {
		e.preventDefault()
		dispatch(signUserStart())
		const user = { email, password }
		try {
			const res = await AuthService.userLogin(user)
			dispatch(signUserSuccess(res.user))
			navigate('/')
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
	}

	useEffect(() => {
		if (loggedIn) {
			navigate('/')
		}
	}, [loggedIn])

	return (
		<div className='text-center'>
			<main className='form-signin w-25  m-auto'>
				<form>
					<img
						className='mb-4 mt-5'
						src={icon}
						alt='icon'
						width='200'
						height='60'
					/>
					<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
					<ValidationError />
					<Input
						label={'Email address'}
						state={email}
						setState={setEmail}
						type={'email'}
					/>
					<Input
						label={'Password'}
						state={password}
						setState={setPassword}
						type={'password'}
					/>
					<button
						className='btn btn-primary w-100 py-2 my-4'
						disabled={isLoading}
						onClick={loginHandler}
						type='submit'
					>
						{isLoading ? 'Loading...' : 'Login'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
