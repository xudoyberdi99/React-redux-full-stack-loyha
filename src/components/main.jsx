import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Articles from '../service/articles'
import { getArticlesStart, getArticlesSuccess } from '../slice/article'
import { Loader } from '../ui'
import { ArticleCard } from './index'

const Main = () => {
	const { articles, isLoading } = useSelector(state => state.article)
	const dispatch = useDispatch()

	const getArticles = async () => {
		dispatch(getArticlesStart())
		try {
			const res = await Articles.getArticles()
			dispatch(getArticlesSuccess(res.articles))
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getArticles()
	}, [])
	return (
		<>
			{isLoading && <Loader />}
			<div className='album py-5'>
				<div>
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						{articles.map(item => (
							<ArticleCard item={item} getArticles={getArticles} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Main
