import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	articles: [],
	isLoading: false,
	articleDetail: null,
	error: null,
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		getArticlesStart: state => {
			state.isLoading = true
		},
		getArticlesSuccess: (state, action) => {
			state.isLoading = false
			state.articles = action.payload
		},
		getArticlesFailure: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
		getArticleDetailStart: state => {
			state.isLoading = true
		},
		getArticleDetailSuccess: (state, action) => {
			state.isLoading = false
			state.articleDetail = action.payload
		},
		getArticleDetailFailure: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
	},
})

export const {
	getArticlesFailure,
	getArticlesStart,
	getArticlesSuccess,
	getArticleDetailStart,
	getArticleDetailFailure,
	getArticleDetailSuccess,
} = articleSlice.actions
export default articleSlice.reducer
