import React, {useState} from 'react';


function Edit(props) {


    
    const [text , setText] = useState(props.item)

    
    let inputHandler = (e) => setText(e.target.value)

    return (

        <div className="col-6 mb-3">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input value={text} onChange={inputHandler} className="form-control" />
                </div>
                <div>

                    <button type="button" className="btn btn-info btn-sm mr-1" onClick={()=>{props.edit(text)}}>edit</button>

                </div>
            </div>
        </div>
    )
}

export default Edit;