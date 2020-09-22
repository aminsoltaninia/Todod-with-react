
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
            <AuthContext.Provider
             value={{
                 authenticated : state.authenticated,
               
                dispatch
            }}> 
                <todosContext.Provider
                    value={
                        {
                            todos : state.todos,
                            dispatch
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