import { useNavigate } from 'react-router-dom'
import Articles from '../service/articles'
import { useSelector } from 'react-redux'

const ArticleCard = ({ item, getArticles }) => {
	const navigate = useNavigate()
	const { loggedIn, user } = useSelector(state => state.auth)

	const deleteArticle = async slug => {
		try {
			await Articles.deleteArticle(slug)
			getArticles()
		} catch (error) {
			console.log(error)
		}
	}

	return (
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
								<button
									onClick={() => navigate(`/edit-article/${item.slug}`)}
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
	)
}

export default ArticleCard
