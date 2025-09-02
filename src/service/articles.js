import axios from './api'

const Articles = {
	async getArticles(){
		const {data} = await  axios.get('/articles')
		return data
	}
}

export default Articles