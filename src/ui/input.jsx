
function Input({label,type,state,setState}) {
	 const id = `input-${label.replace(/\s+/g, '').toLowerCase()}`; 
	 
	return (
		<div className="form-floating mb-3"> 
			<input type={type} value={state} onChange={e=>setState(e.target.value)} className="form-control" id={id} placeholder={label}/> 
			<label htmlFor={id}>{label}</label> 
		</div>  
	)
}

export default Input