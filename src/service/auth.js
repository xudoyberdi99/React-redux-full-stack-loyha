import axios from './api';

const AuthService ={
	async userRegister(user){
		const res = await axios.post('/users',{user})
		return res.data
	},
	async userLogin(user){
		const res = await axios.post('/users/login',{user})
		return res.data
	},
	async getUser(){
		return 'User data'
	}

}


export default AuthService;