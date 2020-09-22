import React, { useContext } from 'react';
import AuthContext from '../../Context/authContext';


function Header() {

    const authContext = useContext(AuthContext)

    let doLogin = () => authContext.dispatch({ type : 'login_user'})
    let doLogOut = () => authContext.dispatch({ type : 'logout_user'})

    return (
        <header >
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Todo App</strong>
                    </a>

                    {
                      authContext.authenticated === false ?

                                              <button className="btn btn-sm btn-success" onClick={doLogin}>Login</button>

                                              :
                                               
                                              <button className="btn btn-sm btn-danger" onClick={doLogOut}>Logout</button>

                    }

                </div>
            </div>
        </header>
    )
}

export default Header;
