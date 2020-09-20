
import React, {useReducer , useState} from 'react';
import Form from './todo/formAddTodod';

import 'bootstrap/dist/css/bootstrap.css'

// importComponents
import Header from './layout/Header'
import TodoList from './todo/todoList';

// imporr conetex
import AuthContext from '../Context/authContext';
import todosContext from '../Context/tododCOntext';

// import Reducer 
import AppReducer from '../Reducers/appReducer';


function App(){


        const [state , dispatch ] = useReducer ( AppReducer , {

                todos: [],
                authenticated : false
            }
        )
   

        return (
            <AuthContext.Provider value={{
                 authenticated : this.state.authenticated,
                 login : () =>{
                     this.setState({ authenticated : true })
                 },
                 logout : ()=>{
                      this.setState({ authenticated : false })
                 }
            }}> 
                <todosContext.Provider
                    value={
                        {
                            dispatch
                            // todos: this.state.todos,
                            // add: this.addTodo.bind(this),
                            // done: this.toggleTodo.bind(this),
                            // delete: this.deleteTodo.bind(this),
                            // edit: this.editTodo.bind(this)
                        }
                    }>

                    <div className="App">
                        <Header />
                        <main>
                            <section className="jumbotron">
                                <div className="container d-flex flex-column align-items-center">
                                    <h1 className="jumbotron-heading">Welcome</h1>
                                    <p className="lead text-muted">To get started, add some items to your list:</p>
                                    <div className="form-inline">
                                        <Form />
                                    </div>
                                </div>
                            </section>
                            <div className="todosList">
                                <div className="container">
                                    <div className="d-flex flex-column align-items-center ">
                                        <TodoList />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </todosContext.Provider>
            </AuthContext.Provider>
        )

    


}

export default App;