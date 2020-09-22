
function AppReducer(prevState, action ){
     
    switch (action.type) {
        case 'add_todo':
           return addTodo(prevState , action )
           break;
        case 'login_user':    
           return {
               ...prevState,
            authenticated : true 
            }
            break;
        case 'logout_user':
            return {
                ...prevState,
                authenticated : false
             }
             break;
         case 'delete_todo':
             let { key } = action.payload;
             return {
                 ...prevState , 
                todos: prevState.todos.filter(item => item.key !== key)
             }
             break;
         case 'toggle_todo': 
             
            return toggleTodo(prevState , action )  
            
             break;

        case 'edit_todo' : 
           return editTodo(prevState , action)
           break;
        default:
            return prevState ;
            
    }
    
    

}

 
let editTodo = (prevState, action)=> {

    
    let { key , text } = action.payload
    let item = prevState.todos.find(item => item.key === key)

    item.text = text;
    let newTodods = prevState.todos.filter(item => item.key !== key)

    return { 
        ...prevState ,
        todos: [
            ...newTodods,
            item
        ]
    }
}


let addTodo = (prevState , action )=>{

    let { text } = action.payload;

    return {
        ...prevState , // for authenticated
        todos: [
               ...prevState.todos,
              {
                      key: Date.now(),
                      done: false,
                         text
               }
       ]

    }
}

let toggleTodo = (prevState , action)=>{

    let { key } = action.payload;  
    
    let item = prevState.todos.find(item => item.key === key)

    item.done = !item.done;

    let newTodods =prevState.todos.filter(item => item.key !== key)

    return {
        ...prevState ,
        todos: [
            ...newTodods,
            item
        ]
    }
   
}

export default AppReducer;
