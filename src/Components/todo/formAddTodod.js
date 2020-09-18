import React ,{useState} from 'react';

function Form(props){
        
    const [ text , settext ] = useState('')

   let formHandler = (e)=>{
        e.preventDefault();// ta vaghti submit nakone user kario 
        console.log('sub')
        props.add(text)
        settext('')
    }
    
    let inputHandler = (e)=>{
       
        settext(e.target.value)
    }
   
        return(

            <form className="form-group" onSubmit={formHandler}>
            <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={text} onChange={inputHandler} />
            <button type="submit" className="btn btn-primary">add</button>
        </form>
        )
    

}

export default Form ;

