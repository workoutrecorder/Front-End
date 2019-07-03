import React, { Component } from 'react'
import PostExercises from './PostExercises'
import axios from 'axios'
import TargetArea from "."
import Sets from "../04-sets/Sets"

let url = 'http://localhost:3300'


export class Exercises extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercises:[],
            targetArea: [],
            sets: []
        }
    }
    componentDidMount = () => {
        this.getExercises()
    }
    
    
    
    getExercises = event => {
        let workout_id = window.location.pathname.split("/")[1]
        // axios.get(`${url}/workouts/${1}/exercises`, { headers:{Authorization: userData.token}})
        axios.get(`${url}/workouts/${workout_id}/exercises`)
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

    getTargetArea = event => {
        // axios.get(`${url}/exercises/${userData.user_id}/targets/`, { headers:{Authorization: userData.token}})
        let exercise_id = event.currentTarget.attributes.value.value
        console.log(exercise_id)
        axios.get(`${url}/exercises/${exercise_id}/targetarea/`)
        .then(res => {
            this.setState({
                targetArea: res.data
            })
            this.getSets(exercise_id)
        })
        .catch(err => {
            console.log(err)
        })
        console.log("I am a function you darned console error")
    }

    getSets = (event, exercise_id) => {
        // axios.get(`${url}/exercises/${userData.user_id}/sets/`, { headers:{Authorization: userData.token}})
        axios.get(`${url}/exercises/${exercise_id}/sets/`)
        .then(res => {
            this.setState({
                sets: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
        console.log("I am a function you darned console error")
    }
    
    render() {
        return (
            <div>
                <PostExercises/>
                {this.state.exercises.map(exercise => {
                return <div className="exerciseContainer" key={exercise.id} value = {exercise.id}>
                            <h2 value = {exercise.id} onClick={this.getTargetArea}> {exercise.name} </h2>
                            {/* <TargetArea targetArea = {targetArea}/>
                            <Sets sets = {sets} /> */}
                        </div>
                })}
            </div>
        )
    }
}

export default Exercises
