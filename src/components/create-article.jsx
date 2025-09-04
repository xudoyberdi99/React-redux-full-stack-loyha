import { useState } from 'react'
import {ArticleForm} from './'
import Articles from '../service/articles'
import { useDispatch } from 'react-redux'
import { postArticleFailure,postArticleSuccess,postArticleStart,getArticlesSuccess } from '../slice/article'
import { useNavigate } from 'react-router-dom'


const CreateArticle = () => {
	const [title,setTitle] = useState('')
	const [description,setDescription] = useState('')
	const [body,setBody] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	

	const submitHandler = async (e) => {
		e.preventDefault()
		const article = {title,description,body}
		dispatch(postArticleStart())
		try{
			 await Articles.createArticle(article)
			dispatch(postArticleSuccess())
			navigate('/')
		}catch(error){
			dispatch(postArticleFailure())
		}
	}

	const formProps= {title,setTitle,description,setDescription,body,setBody,submitHandler}

	return (
		<div className='text-center'>
			<h1 className='fs-2'>Create  Article</h1>
			<div className='w-75 mx-auto'>
					<ArticleForm {...formProps}/>
			</div>
		</div>
	)
}

export default CreateArticle