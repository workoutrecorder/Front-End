import React, { Component } from 'react'
import axios from 'axios';

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
     console.log(userData.token)
     axios.get(`${url}/users/${userData.user_id}/workouts`, { headers:{Authorization: userData.token}})
        .then(res => {
            this.setState({
                exercises: res.data
            })
        })
        .catch(err => {
            console.log(JSON.stringify(userData.token))
            console.log(err)
        })
    }

    // getExercises = value => {
    //     axios.get(`${url}/workouts/1/exercises/`, {headers:{Authorization:localStorage.getItem('token')}})
    //     .then(res => {
    //         this.setState({
    //             exercises: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // getTargetArea = value => {
    //     axios.get(`${url}/exercises/1/targets/`, {headers:{Authorization: localStorage.getItem('token')}})
    //     .then(res => {
    //         this.setState({
    //             targetArea: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
    // getSets = value => {
    //     axios.get(`${url}/exercises/1/sets/`, {headers:{Authorization:localStorage.getItem('token')}})
    //     .then(res => {
    //         this.setState({
    //             sets: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

render(){
    let {workouts} = this.state
    return (
        <div>
            {workouts.map(workout => {
                return <div key={workout.id}>
                    <h2>{workout.name}</h2>
                    <h3>{workout.date}</h3>
                </div>
            })}
        </div>
    )
}}

export default Workouts

