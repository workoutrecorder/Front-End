import React, { Component } from 'react'
import Workouts from "../components/Workouts"
import axios from 'axios';

let url = 'http://localhost:3300'

export class MainView extends Component {
    constructor(){
        super();
        this.state = {
            workouts: [],
            exercises: [],
            targetArea: [],
            sets: []
        }
    }

    componentDidMount = () => {
        this.getWorkouts()
        this.getExercises()
        this.getTargetArea()
        this.getSets()
    }

    // Make ID dynamic
    getWorkouts = value => {
        axios.get(`${url}/users/:id/workouts`)
        .then(res => {
            this.setState({
                workouts: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    getExercises = value => {
        axios.get(`${url}/workouts/:id/exercises`)
        .then(res => {
            this.setState({
                exercises: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    getTargetArea = value => {
        axios.get(`${url}/exercises/:id/targets`)
        .then(res => {
            this.setState({
                targetArea: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    getSets = value => {
        axios.get(`${url}/exercises/:id/sets`)
        .then(res => {
            this.setState({
                sets: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        let {workouts} = this.state
        return (
            <div>
                <Workouts workouts={workouts}/>
            </div>
        )
    }
}

export default MainView
