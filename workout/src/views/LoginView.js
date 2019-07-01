import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from '../login/Login'
import Register from '../login/Register'
import LogNav from '../login/LogNav'

export class LoginView extends Component {
    render() {
        return (
            <div>
                <LogNav/>
                <Switch>
                    <Route 
                    exact path ="/login" 
                    render = {(...props) => (<Login 
                    handleChanges = {this.props.handleChanges} 
                    signIn = {this.props.signIn}
                    password = {this.props.password} 
                    username = {this.props.username}
                    {...props} /> )} 
                    />
                    <Route exact path ="/register" component = {Register}/>
                </Switch>
            </div>
        )
    }
}

export default LoginView
