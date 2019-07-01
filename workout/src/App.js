import React from 'react';
import './App.scss';
import axios from 'axios';
import { Route } from 'react-router-dom';
import MainView from "./views/MainView"
import LoginView from "./views/LoginView"

export class App extends React.Component {
  constructor(props){  
    super(props);  
    this.state = { 
       
    };  
    }  

render(){
  return (
    <div className="App">
        
      <h1>Workout Recorder</h1>
      <MainView />
      <LoginView />
    </div>
  );
}
}
export default App;
