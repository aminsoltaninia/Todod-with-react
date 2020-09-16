
import React, { Component } from 'react';
import Form from './formAddTodod';
import Todo from './todo';
import 'bootstrap/dist/css/bootstrap.css'

// importComponents
import Header from './Header'


class App extends Component {

    state = {

        todos: [],
        statusDone : false 
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

    deleteTodo(key){
        this.setState(prevState=>{
            return {
                todos : prevState.todos.filter(item=> item.key !== key)
            }
        })
    }  
    
    toggleTodo(key){
        let {todos} = this.state

        let item = todos.find(item => item.key === key )

        item.done =! item.done ;
        let newTodods = todos.filter(item => item.key !== key)
        this.setState({
            todos : [
                ...newTodods ,
                 item
            ]
        })
    }
     
    render() {

        let {todos , statusDone }= this.state;

        let filterTodos = todos.filter(item => item.done==statusDone)
        console.log(filterTodos)
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
                                <nav className="col-6 mb-3">
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">

                                        <a className={`nav-item nav-link  font-weight-bold ${statusDone=== false ? 'active' :''}`} 
                                        id="nav-home-tab" onClick={()=>this.setState({statusDone : false})}>undone <span className="badge badge-secondary">{todos.filter(item=> item.done==false).length}</span></a>

                                        <a className={`nav-item nav-link  font-weight-bold ${statusDone === true ? 'active' :''}`} 
                                        id="nav-profile-tab" onClick={()=>this.setState({statusDone :true})}>done <span className="badge badge-success">{todos.filter(item=> item.done==true).length}</span></a>

                                    </div>
                                </nav>
                            
                            {
                                filterTodos.length === 0 ?
                                                         <p className="col-6 mb-3 ">there isnt any todo</p> :
                                                          filterTodos.map(item => <Todo key={item.key}
                                                                                        text={item}
                                                                                        deleteTodo={this.deleteTodo.bind(this)} 
                                                                                        done = {this.toggleTodo.bind(this)}
                                                                                        />)
                            }
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )

    }


}

export default App;