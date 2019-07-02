import React, { Component } from 'react'
import axios from 'axios';
import Exercises from "./Exercises"
import PostWorkouts from './PostWorkouts';

let url = 'http://localhost:3300'
let userData =JSON.parse(localStorage.getItem('userdata'))

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
    }
    
    // Make ID dynamic
    getWorkouts = value => {
    //  axios.get(`${url}/users/${userData.user_id}/workouts`, { headers:{Authorization: userData.token}})
     axios.get(`${url}/users/${1}/workouts`)
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

    getExercises = event => {
        // axios.get(`${url}/workouts/${1}/exercises`, { headers:{Authorization: userData.token}})
        event.preventDefault()
        axios.get(`${url}/workouts/${1}/exercises/`)
        .then(res => {
            console.log("getExercises", res)
            this.setState({
                exercises: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    getTargetArea = value => {
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
            <PostWorkouts/>
            {workouts.map(workout => {
            return <div className="workout-container" key={workout.id}>
                        <h4>{workout.date}</h4>
                        <h4>{workout.name}</h4>
                        <button onClick={this.getExercises}>Expand</button>
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

