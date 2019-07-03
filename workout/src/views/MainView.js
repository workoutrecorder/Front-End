import React, { Component } from 'react'
import Workouts from "../components/01-workouts/Workouts"
import Exercises from "../components/02-exercises/Exercises"
import { Route } from "react-router-dom"

export class MainView extends Component {
      constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Route path="/" exact render={(...props) => <Workouts signOut = {this.props.signOut} {...props} />}/> 
                <Route path="/:id" exact render={(...props) => <Exercises {...props} />}/> 
            </div>
        )
    }
}

export default MainView
