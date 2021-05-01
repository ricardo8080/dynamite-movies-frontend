import React from 'react'
import {Redirect, Route} from 'react-router-dom'
//import auth from './auth'

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} 
            render={ props => {
                const testing = localStorage.getItem('isAuth');
                //if(auth.isAuthenticated()) {
                if(testing ==="true") { 
                    return <Component {...props} ></Component>
                } else {
                    return <Redirect to= {
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }></Redirect>
                }
            }
        } 
        ></Route>
    )
};