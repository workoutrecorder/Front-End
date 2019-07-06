import React, { Component } from 'react'
import PostExercises from './PostExercises'
import axios from 'axios'
import PostTargetAreas from "../03-targetareas/PostTargetAreas"
import TargetArea from "../03-targetareas/TargetArea"
import PostSets from "../04-sets/PostSets"
import { Link } from 'react-router-dom'
import ExerciseSummary from './ExerciseSummary';

let url = 'http://localhost:3300'


export class Exercises extends Component {
    constructor(props){
        super(props);
        this.state = {
            workout:[],
            exercises:[],
            targetArea: [],
            sets: [],
            reveal: false,
            revealId: ''
        }
    }
    componentDidMount = () => {
        this.getWorkout()
        this.getExercises()
    }
    
    getWorkout = event => {
        //  axios.get(`${url}/users/${userData.user_id}/workouts`, { headers:{Authorization: userData.token}})
        let workout_id = window.location.pathname.split("/")[1] 
        axios.get(`${url}/workouts/${workout_id}`)
            .then(res => {
                console.log(res)
                this.setState({
                    workout: res.data
                })
            })
            .catch(err => {
                // console.log(JSON.stringify(userData.token))
                console.log(err)
            })
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

    deleteExercises = (event, id) => {
        // let workout_id = event.currentTarget.attributes.value.value
        axios
          .delete(`${url}/exercises/${id}`)
          .then(res => {
           console.log("exercise deleted");
           let exerciseList = this.state.exercises.filter(exercise => {
           return exercise.id !== id
           })
           
           this.setState({
            exercises: exerciseList
           })
        //    toast.success('Workout Deleted!')
            })
          .catch(err => {
            console.log(err);
          });
      };
    
    getTargetArea = (exercise_id) => {
        // axios.get(`${url}/exercises/${userData.user_id}/targets/`, { headers:{Authorization: userData.token}})
        // let exercise_id = event.currentTarget.attributes.value.value
    
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

    }

    getSets = (exercise_id) => {
        // axios.get(`${url}/exercises/${userData.user_id}/sets/`, { headers:{Authorization: userData.token}})
        axios.get(`${url}/exercises/${exercise_id}/sets/`)
        .then(res => {
            this.setState({
                sets: res.data
            }, ()=> {
                this.setState({
                    reveal: true
                })
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    addIdToReveal = (event) => {
        console.log("I AM CURRENT TARGET", event.currentTarget.attributes.value.value)
        let exercise_id = event.currentTarget.attributes.value.value
        if (this.state.revealId !== event.currentTarget.attributes.value.value){
        this.setState({
            revealId: exercise_id
        }, () => {this.getTargetArea(exercise_id)})
        } else {
        this.setState({
            revealId: "",
            targetArea:[],
            sets:[]
        })
        }
    }

    
    render() {
        return (
            <div className ="exercise-wrapper">

                <div className = "exerciseTitle-wrapper">
                    <h2>Exercises</h2>
                    <Link to="/">
                        <button>Back</button>
                    </Link>
                </div>
                <div className="exercise-parting">
                    <ExerciseSummary 
                        workout = {this.state.workout}
                        exercises = {this.state.exercises}
                        targetArea={this.state.targetArea}
                        sets={this.state.sets}
                    />
                    <div>
                        <PostExercises/>
                        {this.state.exercises.map(exercise => {
                        return <div className = "reveal-container">
                                    <div onClick = {this.addIdToReveal} 
                                        className="exerciseContainer" 
                                        key={exercise.id} 
                                        value = {exercise.id}
                                        >
                                        <h4 value = {exercise.id}> Exercise: {exercise.name} </h4>
                                        <i className="fas fa-dumpster" onClick={e => this.deleteExercises(e, exercise.id)}/>
                                    </div>

                                    <div className = {this.state.reveal === true && exercise.id == this.state.revealId ? 'revealed': 'hidden'}>
                                        <PostTargetAreas exercise_id = {exercise.id}/>
                                        <PostSets exercise_id = {exercise.id}/>
                                        <TargetArea targetArea = {this.state.targetArea} sets = {this.state.sets}/>
                                    </div>
                                </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Exercises
