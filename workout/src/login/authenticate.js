import React from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const url = "http://localhost:3300";

const authenticate = App => Login => 
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = ({
                username: '',
                password: '',
                loggedIn: false
            })
        }
        
        componentDidMount(){
            
            // if(localStorage.getItem('userdata')){
            //     const userdata = JSON.parse(localStorage.getItem('userdata'));
            //     axios.post(`${url}/auth/checkauth`, {token: userdata.token}).then(res => {
            //         console.log(res.data)
            //         res.data ? this.setState({ loggedIn: true}) : localStorage.clear();
            //     }).catch(error => console.log(error));
            // }
        }

        handleChanges = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        //requires username and password
        signIn = event => {
            event.preventDefault();
            return axios
                .post(`${url}/auth/login`,{
                    username: this.state.username,
                    password: this.state.password
                })

                .then( res => {
                    localStorage.setItem("userdata", JSON.stringify(res.data));
                    this.setState({
                        loggedIn: true
                    });
                    toast.success("Login Successful!")
                })
                .catch(err => toast.error("You definitely did something wrong!!!"));
            }

        

        signOut = event => {
            event.preventDefault();
            window.localStorage.clear();
            this.setState({
                loggedIn: false
            })
            this.props.history.push('/login');
        }




        render(){
            if(this.state.loggedIn){
                return <App signOut = {this.signOut}
                loggedIn = {this.state.loggedIn}
                />
            } else {
                return <Login 
                handleChanges = {this.handleChanges}
                signIn = {this.signIn}
                username = {this.state.username}
                password = {this.state.password}
                />
            }
        }
    }


export default authenticate;