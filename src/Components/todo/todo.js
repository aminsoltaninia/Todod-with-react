
import React, { useState , useContext } from 'react';
import Edit  from './editTodo';
import TodosContext from '../../Context/tododCOntext';

function Todo(props) {

    
    let{item} = props

    const [edit, setEdit] = useState(false)
    const todosContext = useContext(TodosContext)
    console.log(todosContext)

    let editHandler = (text) => {
      
        todosContext.dispatch({ type : 'edit_todo' , payload : { key : item.key, text }});
        setEdit(false)
    }
 
    let deleteHandler = (e)=>{
        // ajax
        todosContext.dispatch({type : 'delete_todo' , payload : { key : item.key}})
    }

    return (
        <>
            {
                edit === false ? (

                    <div className="col-6 mb-3">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                                {item.text}
                            </div>
                            <div>
                                <button type="button"
                                    className="btn btn-success btn-sm mr-1"
                                    onClick={() => { todosContext.dispatch({type : 'toggle_todo' , payload : { key : item.key } }) }}
                                >{item.done ? 'undone' : 'done'}</button>
                                <button type="button" className="btn btn-info btn-sm mr-1" onClick={()=>{ setEdit(true)  }}>edit</button>
                                <button type="button"
                                    className="btn btn-danger btn-sm "
                                    onClick={deleteHandler }
                                >delete</button>
                            </div>
                        </div>
                    </div>

                )
                    :
                    <Edit item={item} edit={editHandler} />
            }
        </>
    )

}


export default Todo;