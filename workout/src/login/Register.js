import React from 'react';
import axios from 'axios';

const url = "http://localhost:3300";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            verifypassword: ''
        }
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = event => {
        event.preventDefault();
        if(this.state.password === this.state.verifypassword){
        axios
            .post(`${url}/auth/register`, {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })

            .then(res => {
                console.log('Its working', res)
                alert('Account registration is successful')
            })

            .catch( error => console.log('OH NO', error));

            this.setState({
                    username: '',
                    email: '',
                    password: '',
                    verifypassword: ''
            })} else {
                alert('Password does not match!')
                this.setState({
                    username: '',
                    email: '',
                    password: '',
                    verifypassword: ''
            })
                
            }
    }
  
    
    render() { 
        return (
            // ternary that checks state
            <div className = "register-wrapper">
                <form type = "submit">

                    <div>
                    <i className="fas fa-user"></i>
                    <input 
                    placeholder = "username..."
                    type = "text"
                    value = {this.state.username}
                    name = "username"
                    onChange = {this.handleChanges}
                    required
                    />
                    </div>

                    <div>
                    <i className="far fa-envelope"></i>
                    <input 
                    placeholder = "email..."
                    type = "email"
                    value = {this.state.email}
                    name = "email"
                    onChange = {this.handleChanges}
                    required
                    />
                    </div>

                    <div>
                    <i className="fas fa-lock"></i>
                    <input
                    placeholder = "password..."
                    type = "password"
                    value = {this.state.password}
                    name = "password"
                    onChange = {this.handleChanges}
                    required
                    />
                    </div>

                    <div>
                    <i className="fas fa-lock"></i>
                    <input 
                    placeholder = "verifypassword..."
                    type = "password"
                    value = {this.state.verifypassword}
                    name = "verifypassword"
                    onChange = {this.handleChanges}
                    required
                    />
                    </div>
                
                <button onClick = {this.register}> Submit </button>
                </form>
                <p>Already have an account?</p>
            </div>
         );
    }
}
 
export default Register;