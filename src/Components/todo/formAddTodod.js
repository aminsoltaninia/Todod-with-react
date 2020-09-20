import React, { useState, useContext } from 'react';
import TodosContext from '../../Context/tododCOntext';



// function Form(props){

//    const [ text , settext ] = useState('')

//    const todosContext = useContext(TodosContext)


//    let formHandler = (e)=>{
//         e.preventDefault();// ta vaghti submit nakone user kario 

//         todosContext.add(text)
//         settext('')
//     }

//     let inputHandler = (e)=>{

//         settext(e.target.value)
//     }

//         return(

//             <form className="form-group" onSubmit={formHandler}>
//             <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={text} onChange={inputHandler} />
//             <button type="submit" className="btn btn-primary">add</button>
//         </form>
//         )


// }

class Form extends React.Component {
    
    state = { text : ''}
    static contextType = TodosContext ;
    
    formHandler(e){
        e.preventDefault();// ta vaghti submit nakone user kario 
        this.context.dispatch({ type : 'add_todo' , payload : { text : this.state.text }})
        this.setState({ text : ''})
    };

    inputHandler(e){
        this.setState ( { text : e.target.value } )
       
    };


    render() {

       

        return (

            <form className="form-group" onSubmit={this.formHandler.bind(this)}>
                <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={this.state.text} onChange={this.inputHandler.bind(this)} />
                <button type="submit" className="btn btn-primary">add</button>
            </form>
        )
    }



}

export default Form;

