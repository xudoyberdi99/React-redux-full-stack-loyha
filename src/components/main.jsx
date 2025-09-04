import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Articles from '../service/articles'
import { getArticlesStart, getArticlesSuccess } from '../slice/article'
import { Loader } from '../ui'

const Main = () => {
	const { articles, isLoading } = useSelector(state => state.article)
	const { loggedIn, user } = useSelector(state => state.auth)
	const navigate = useNavigate()
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

	const deleteArticle = async slug => {
		try {
			await Articles.deleteArticle(slug)
			getArticles()
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
								<div className='col' key={item.id}>
									<div className='card h-100 shadow-sm'>
										<svg
											aria-label='Placeholder: Thumbnail'
											className='bd-placeholder-img card-img-top'
											height='225'
											preserveAspectRatio='xMidYMid slice'
											role='img'
											width='100%'
											xmlns='http://www.w3.org/2000/svg'
										>
											<title>Placeholder</title>
											<rect width='100%' height='100%' fill='#55595c'></rect>
										</svg>
										<div className='card-body'>
											<p
												onClick={() => navigate(`/article/${item.slug}`)}
												className='card-text fw-bold m-0'
											>
												{item.title}
											</p>
											<p className='card-text'>{item.description}</p>
										</div>
										<div className='d-flex card-footer justify-content-between align-items-center'>
											<div className='btn-group'>
												<button
													onClick={() => navigate(`/article/${item.slug}`)}
													type='button'
													className='btn btn-sm btn-outline-success'
												>
													View
												</button>
												{loggedIn && user.username === item.author.username && (
													<>
														<button onClick={() => navigate(`/edit-article/${item.slug}`)}
															type='button'
															className='btn btn-sm btn-outline-secondary'
														>
															Edit
														</button>
														<button
															onClick={() => deleteArticle(item.slug)}
															type='button'
															className='btn btn-sm btn-outline-danger'
														>
															Delete
														</button>
													</>
												)}
											</div>
											<small className='text-muted fw-bold text-capitalize'>
												{item.author.username}
											</small>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		)
	}

export default Main
