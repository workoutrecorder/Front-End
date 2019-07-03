import React, { Component } from 'react'
import Workouts from "../components/Workouts"
import Exercises from "../components/Exercises"
import { Route } from "react-router-dom"

export class MainView extends Component {
    
    render() {
        return (
            <div>
                <Route path="/" exact render={(...props) => <Workouts {...props} />}/> 
                <Route path="/:id" exact render={(...props) => <Exercises {...props} />}/> 
            </div>
        )
    }
}

export default MainView
