import { Input,TextArea } from '../ui'
import { useSelector } from 'react-redux'	

const ArticleForm = ({title,setTitle,description,setDescription,body,setBody,submitHandler}) => {
	const {isLoading} = useSelector(state => state.article)	

	return (
		<form onSubmit={submitHandler}>
					<Input label={'title'} state={title} setState={setTitle} type={'text'}/>
					<TextArea label={'description'} state={description} setState={setDescription}  />
					<TextArea label={'body'} state={body} setState={setBody} height= {'300px'} />
					<button className='btn btn-primary w-100 py-2 my-4' type='submit'>
						{isLoading ? 'Loading' : 'Create Article'}
					</button>
				</form>
	)
}

export default ArticleForm