import React, { Component } from 'react'
import axios from 'axios';
import PostWorkouts from './PostWorkouts';
import Exercises from './Exercises';
import {Link, NavLink} from "react-router-dom"

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
     axios.get(`${url}/users/${userData.user_id}/workouts`)
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
        axios.get(`${url}/exercises/${2}/targetarea/`)
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
    let {workouts, exercises, targetArea, sets} = this.state
    console.log("workout",exercises)
    return (
        <div>
            <h2>Workouts</h2>
            <PostWorkouts/>
            {workouts.map(workout => {
                console.log(exercises)
            return <div className="workout-container" key={workout.id}>
                        <Link to={`/${userData.user_id}`} className="workouts">
                            <h4>{workout.date}</h4>
                            <h4>{workout.name}</h4>
                        </Link>
                    </div>
            })}
            <Exercises 
            exercises = {exercises}
            targetArea = {targetArea}
            sets = {sets}
            getTargetArea = {this.getTargetArea}
            getSets = {this.getSets}
            />
            
        </div>
    )
}}

export default Workouts


{/* <div className="exercises">
    
</div> */}