import React, { Component } from 'react'

export class Login extends Component {
  constructor(props){
    super(props);
    this.state = ({
        
    });
  }


  render() {
    return (
      //Ternary that checks state
      <div className = "login-wrapper">
        <form type = "submit">
          <div>

            <div>
              <i className="fas fa-user"></i>
              <input placeholder = "Username"
              type = "text"
              value = {this.props.username}
              name = "username"
              onChange = {this.props.handleChanges}
              />
            </div>

            <div>
              <i className="fas fa-lock"></i>   
              <input placeholder = "Password..."
              type = "password"
              value = {this.props.password}
              name = "password"
              onChange = {this.props.handleChanges}
              />
            </div>

           </div>
        </form> 
        <button className = "login-button" onClick = {this.props.signIn}>Login</button>
        <p>Don't have an account?</p>
      </div>
    )
  }
}

export default Login;