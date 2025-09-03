import axios from './api'

const Articles = {
	async getArticles() {
		const { data } = await axios.get('/articles')
		return data
	},
	async getArticle(slug) {
		const { data } = await axios.get(`/articles/${slug}`)
		return data
	},
}

export default Articles
