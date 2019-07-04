import React, { Component } from 'react'
import axios from 'axios';
import PostWorkouts from './PostWorkouts';
import { Link } from "react-router-dom"

let url = 'http://localhost:3300'

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
    let userData =JSON.parse(localStorage.getItem('userdata'))
     axios.get(`${url}/users/${userData.user_id}/workouts`)
        .then(res => {
            console.log(res)
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
    let {workouts} = this.state
    console.log(workouts, "JAKE")
    return (
        <div className ="workouts-wrapper">
            <div className ="innerworkout-wrapper">
                <h2>Workouts</h2>
                <button  onClick = {this.props.signOut}>Logout</button>
            </div>
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