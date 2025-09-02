import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	articles:[],
	isLoading:false,
	error:null
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
		},
	}

})

export const {getArticlesFailure,getArticlesStart,getArticlesSuccess} = articleSlice.actions
export default articleSlice.reducer