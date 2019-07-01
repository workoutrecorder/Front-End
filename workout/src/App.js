import React from 'react';
import './App.scss';
import { withRouter } from 'react-router-dom';
import MainView from "./views/MainView"
import LoginView from "./views/LoginView"
import authenticate from "./login/authenticate"

class App extends React.Component {
    
  componentDidMount(){
    console.log(window.location.pathname)

    if(!localStorage.getItem("userdata") && window.location.pathname !== '/register'){
    this.props.history.push('./login');
    }
  }

  render() {
    return (
      <div className="App">
       <Auth/>
      </div>
    );
  }
}

const Auth = withRouter(authenticate(MainView)(LoginView));

export default withRouter(App);
