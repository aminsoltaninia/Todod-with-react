
function AppReducer(prevState, action ){
     
    switch (action.type) {
        case 'add_todo':
            let { text } = action.payload;
            return {
                todos: [
                           ...prevState.todos,
                          {
                                        key: Date.now(),
                                        done: false,
                                        text
                                    }
                                ]

            }
            
           
    
        default:
            return prevState ;
            
    }
    
    

}


// addTodo(text) {

//     this.setState(prevState => {
//         return {
//             todos: [
//                 ...prevState.todos,
//                 {
//                     key: Date.now(),
//                     done: false,
//                     text
//                 }
//             ],

//         }

//     })
// }

// editTodo(key, text) {

//     let { todos } = this.state

//     let item = todos.find(item => item.key === key)

//     item.text = text;
//     let newTodods = todos.filter(item => item.key !== key)
//     this.setState({
//         todos: [
//             ...newTodods,
//             item
//         ]
//     })
// }

// deleteTodo(key) {
//     this.setState(prevState => {
//         return {
//             todos: prevState.todos.filter(item => item.key !== key)
//         }
//     })
// }

// toggleTodo(key) {
//     let { todos } = this.state

//     let item = todos.find(item => item.key === key)
//     item.done = !item.done;

//     let newTodods = todos.filter(item => item.key !== key)
//     this.setState({
//         todos: [
//             ...newTodods,
//             item
//         ]
//     })
// }

export default AppReducer;
