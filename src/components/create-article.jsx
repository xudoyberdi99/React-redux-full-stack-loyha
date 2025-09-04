import { useState } from 'react'
import { Input,TextArea } from '../ui'	


const CreateArticle = () => {
	const [title,setTitle] = useState('')
	const [description,setDescription] = useState('')
	const [body,setBody] = useState('')
	// const [tagList,setTagList] = useState([])


	return (
		<div className='text-center'>
			<h1 className='fs-2'>Create  Article</h1>
			<div className='w-75 mx-auto'>
				<form>
					<Input label={'title'} state={title} setState={setTitle} type={'text'}/>
					<TextArea label={'description'} state={description} setState={setDescription}  />
					<TextArea label={'body'} state={body} setState={setBody} height= {'300px'} />
					<button className='btn btn-primary w-100 py-2 my-4' type='submit'>
						Create Article
					</button>
				</form>
			</div>
		</div>
	)
}

export default CreateArticle