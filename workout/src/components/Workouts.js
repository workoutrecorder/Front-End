import React, { Component } from 'react'
import axios from 'axios';
import PostWorkouts from './PostWorkouts';
import {Link, NavLink} from "react-router-dom"

let url = 'http://localhost:3300'
let userData =JSON.parse(localStorage.getItem('userdata'))

export class Workouts extends Component {
    constructor(){
        super();
        this.state = {
            workouts: [],
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

    

render(){
    let {workouts, exercises, targetArea, sets} = this.state
    console.log("workout",exercises)
    return (
        <div>
            <h2>Workouts</h2>
            <PostWorkouts/>
            {workouts.map(workout => {
            return <div className="workout-container" key={workout.id}>
                        <Link to={`/${workout.id}`} className="workouts">
                            <h4>{workout.date}</h4>
                            <h4>{workout.name}</h4>
                        </Link>
                    </div>
            })}
            
        </div>
    )
}}

export default Workouts