import {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import ArticleService from '../service/articles'
import { useNavigate, useParams } from 'react-router-dom'	
import ArticleForm from './article-form'
import Articles from '../service/articles'


const ArticleEdit = () => {
	const [title,setTitle] = useState('')
	const [description,setDescription] = useState('')
	const [body,setBody] = useState('')
	const dispatch = useDispatch()
	const {slug} = useParams()
	const navigate= useNavigate()

		useEffect(() => {
			const getArticleDetail = async () => {
				dispatch(getArticleDetailStart())
				try {
					const res = await ArticleService.getArticle(slug)
					setTitle(res.article.title)
					setDescription(res.article.description)
					setBody(res.article.body)
					dispatch(getArticleDetailSuccess(res.article))
				} catch (error) {
					console.log(error)
					dispatch(getArticleDetailFailure(error.message))
				}
			}
	
			getArticleDetail()
		}, [])

	const submitHandler = async (e) => {
			e.preventDefault()
			const article = {title,description,body}
			dispatch(postArticleStart())
			try{
				 await Articles.editArticle(slug,article)
				dispatch(postArticleSuccess())
				navigate('/')
			}catch(error){
				dispatch(postArticleFailure())
			}
		}

		const formProps= {title,setTitle,description,setDescription,body,setBody,submitHandler}

	return (
	<div className='text-center'>
			<h1 className='fs-2'>Edit Article</h1>
			<div className='w-75 mx-auto'>
					<ArticleForm {...formProps}/>
			</div>
		</div>
	)
}

export default ArticleEdit