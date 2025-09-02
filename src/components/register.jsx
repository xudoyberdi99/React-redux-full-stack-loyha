import icon from '../Logo/LogoDesktop.png'
import { Input } from '../ui'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
import AuthService from '../service/auth'
import { ValidationError } from './'

const Register = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const registerHandler = async e => {
		e.preventDefault()
		dispatch(signUserStart())
		const user = { username, email, password }
		try {
			const response = await AuthService.userRegister(user)
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
	}

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
					<h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
					<ValidationError />
					<Input
						label={'Username'}
						state={username}
						setState={setUsername}
						type={'text'}
					/>
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
						onClick={registerHandler}
						type='submit'
					>
						{isLoading ? 'Loading...' : 'register'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Register
