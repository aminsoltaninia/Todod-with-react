
import React, { Component } from 'react';
import Form from './todo/formAddTodod';

import 'bootstrap/dist/css/bootstrap.css'

// importComponents
import Header from './layout/Header'
import TodoList from './todo/todoList';


class App extends Component {

    state = {

        todos: [],
       
    }

    addTodo(text) {
        this.setState(prevState => {
            return {
                todos: [
                    ...prevState.todos,
                    {
                        key: Date.now(),
                        done: false,
                        text
                    }
                ],

            }

        })
    }
     
    editTodo(key , text ){
        let { todos } = this.state

        let item = todos.find(item => item.key === key)

        item.text = text;
        let newTodods = todos.filter(item => item.key !== key)
        this.setState({
            todos: [
                ...newTodods,
                item
            ]
        })
    }

    deleteTodo(key) {
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter(item => item.key !== key)
            }
        })
    }

    toggleTodo(key) {
        let { todos } = this.state

        let item = todos.find(item => item.key === key)
        item.done = !item.done;
        
        let newTodods = todos.filter(item => item.key !== key)
        this.setState({
            todos: [
                ...newTodods,
                item
            ]
        })
    }

    render() {

        
        
        return (
            <div className="App">
                <Header />
                <main>
                    <section className="jumbotron">
                        <div className="container d-flex flex-column align-items-center">
                            <h1 className="jumbotron-heading">Welcome</h1>
                            <p className="lead text-muted">To get started, add some items to your list:</p>
                            <div className="form-inline">
                                <Form add={this.addTodo.bind(this)} />
                            </div>
                        </div>
                    </section>
                    <div className="todosList">
                        <div className="container">
                            <div className="d-flex flex-column align-items-center ">
                               <TodoList
                                   todos={this.state.todos}
                                   deleteTodo={this.deleteTodo.bind(this)}
                                   done={this.toggleTodo.bind(this)}
                                   edit={this.editTodo.bind(this)}
                               />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )

    }


}

export default App;