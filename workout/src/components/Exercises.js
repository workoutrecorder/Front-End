import React, { Component } from 'react'
import PostExercises from './PostExercises'
import TargetArea from "./TargetArea"
import Sets from "./Sets"

export class Exercises extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {targetArea, sets} = this.props
        console.log("target",targetArea)
        return (
            <div>
                <PostExercises/>
                {this.props.exercises.map(exercise => {
                return <div className="exerciseContainer" key={exercise.id}>
                    <h2 onClick={() => {
                        this.props.getSets()
                        this.props.getTargetArea()
                    }}>
                    {exercise.name}</h2>
                </div>
                })}
                <TargetArea targetArea = {targetArea}/>
                <Sets sets = {sets} />
            </div>
        )
    }
}

export default Exercises
