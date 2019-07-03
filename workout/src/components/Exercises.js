import React, { Component } from 'react'
import PostExercises from './PostExercises'
import TargetArea from "./TargetArea"
import Sets from "./Sets"
import axios from 'axios'

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
    
    render() {
        return (
            <div>
                <PostExercises/>
                {this.state.exercises.map(exercise => {
                return <div className="exerciseContainer" key={exercise.id}>
                            <h2 onClick={() => {
                                this.props.getSets()
                                this.props.getTargetArea()
                            }}>
                            {exercise.name}</h2>
                            {/* <TargetArea targetArea = {targetArea}/>
                            <Sets sets = {sets} /> */}
                        </div>
                })}
            </div>
        )
    }
}

export default Exercises
