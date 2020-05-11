import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({view: Component, editPhoto, setEditID, setEditPhoto, editID, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props =>
            localStorage.getItem('token') ? (
                <Component {...props} setEditPhoto={setEditPhoto} setEditID={setEditID} editID={editID} editPhoto={editPhoto}  />
            ) : (
                <Redirect to='/' />
            )}
        />
    )
}

export default PrivateRoute;