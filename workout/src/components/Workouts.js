import React, { Component } from 'react'
import axios from 'axios';
import Exercises from "./Exercises"

let url = 'http://localhost:3300'

export class Workouts extends Component {
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
        // this.getExercises()
        // this.getTargetArea()
        // this.getSets()
    }
    
    // Make ID dynamic
    getWorkouts = value => {
     let userData =JSON.parse(localStorage.getItem('userdata'))
    //  axios.get(`${url}/users/${userData.user_id}/workouts`, { headers:{Authorization: userData.token}})
     axios.get(`${url}/users/${2}/workouts`)
        .then(res => {
            console.log(res.data)
            this.setState({
                workouts: res.data
            })
        })
        .catch(err => {
            // console.log(JSON.stringify(userData.token))
            console.log(err)
        })
    }

    getExercises = value => {
        let userData =JSON.parse(localStorage.getItem('userdata'))
        // axios.get(`${url}/workouts/${1}/exercises`, { headers:{Authorization: userData.token}})
        axios.get(`${url}/workouts/${1}/exercises`)
        .then(res => {
            console.log(res.data)
            this.setState({
                exercises: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    getTargetArea = value => {
        let userData =JSON.parse(localStorage.getItem('userdata'))
        // axios.get(`${url}/exercises/${userData.user_id}/targets/`, { headers:{Authorization: userData.token}})
        axios.get(`${url}/exercises/${1}/targetarea/`)
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
        let userData =JSON.parse(localStorage.getItem('userdata'))
        // axios.get(`${url}/exercises/${userData.user_id}/sets/`, { headers:{Authorization: userData.token}})
        axios.get(`${url}/exercises/${1}/sets/`)
        .then(res => {
            this.setState({
                sets: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

render(){
    let {workouts} = this.state
    console.log(this.state.targetArea)
    return (
        <div>
            <h2>Workouts</h2>
            {workouts.map(workout => {
                return <div className="workoutContainer" key={workout.id} onClick={this.getExercises}>
                    <h2>{workout.name}</h2>
                    <h3>{workout.date}</h3>
                </div>
            })}
            <div className="exercises">
                <Exercises 
                    exercises ={this.state.exercises}
                    targetArea = {this.state.targetArea}
                    sets = {this.state.sets}
                    getTargetArea = {this.getTargetArea}
                    getSets = {this.getSets}
                />
            </div>
        </div>
    )
}}

export default Workouts

