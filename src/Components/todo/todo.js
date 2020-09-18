
import React, { useState } from 'react';
import Edit  from './editTodo'

function Todo(props) {

    // console.log(props)
    const [edit, setEdit] = useState(false)
   
    let editHandler = (text) => {
        props.edit(props.text.key,text);
        setEdit(false)
    }

    return (
        <>
            {
                edit === false ? (

                    <div className="col-6 mb-3">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                                {props.text.text}
                            </div>
                            <div>
                                <button type="button"
                                    className="btn btn-success btn-sm mr-1"
                                    onClick={() => { props.done(props.text.key) }}
                                >{props.text.done ? 'undone' : 'done'}</button>
                                <button type="button" className="btn btn-info btn-sm mr-1" onClick={()=>{ setEdit(true)  }}>edit</button>
                                <button type="button"
                                    className="btn btn-danger btn-sm "
                                    onClick={() => { props.deleteTodo(props.text.key) }}
                                >delete</button>
                            </div>
                        </div>
                    </div>

                )
                    :
                    <Edit item={props.text.text} edit={editHandler} />
            }
        </>
    )

}


export default Todo;