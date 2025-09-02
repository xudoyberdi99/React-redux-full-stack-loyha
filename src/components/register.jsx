import icon from '../Logo/LogoDesktop.png'
import { Input } from '../ui'
import { useState } from 'react'
<<<<<<< HEAD
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
=======
import { useDispatch,useSelector } from 'react-redux'
import { signUserFailure,signUserStart,signUserSuccess} from '../slice/auth'	
import AuthService from '../service/auth'

const Register = () => {
	const [username,setUsername] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const dispatch = useDispatch()
	const {isLoading} = useSelector(state=>state.auth)
	
>>>>>>> f3f2589eaaad039a803caead49da5f5b67eaadff

	const registerHandler = async e => {
		e.preventDefault()
		dispatch(signUserStart())
<<<<<<< HEAD
		const user = { username, email, password }
		try {
			const response = await AuthService.userRegister(user)
			dispatch(signUserSuccess(response.user))
=======
		const user ={username,email,password}
		try {
			const response = await AuthService.userRegister(user)	
			dispatch(signUserSuccess(response.user))	
>>>>>>> f3f2589eaaad039a803caead49da5f5b67eaadff
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
	}

	return (
		<div className='text-center'>
<<<<<<< HEAD
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
=======
			<main className="form-signin w-25  m-auto"> 
				<form> 
					<img className="mb-4 mt-5" src={icon} alt="icon" width="200" height="60" /> 
					<h1 className="h3 mb-3 fw-normal">Please sign up</h1>
					<Input label={"Username"} state={username} setState={setUsername} type={"text"}/>
					<Input label={"Email address"} state={email} setState={setEmail} type={"email"}/>
					<Input label={"Password"} state={password} setState={setPassword} type={"password"}/>
						<button className="btn btn-primary w-100 py-2 my-4" disabled={isLoading} onClick={registerHandler} type="submit">
						{isLoading ? 'Loading...' : 'register'}
					</button>  
				</form> 
>>>>>>> f3f2589eaaad039a803caead49da5f5b67eaadff
			</main>
		</div>
	)
}

<<<<<<< HEAD
export default Register
=======
export default Register
>>>>>>> f3f2589eaaad039a803caead49da5f5b67eaadff
