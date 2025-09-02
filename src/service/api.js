import axios from 'axios'
import { getItem } from '../helpers/persistance-storage'

axios.defaults.baseURL = 'http://localhost:3000/api'

axios.interceptors.request.use(config => {
	const token = getItem('token')
	console.log(token)

	const authorization = token ? `Token ${token}` : ''
	console.log(authorization)

	config.headers.authorization = authorization
	return config
})

export default axios
