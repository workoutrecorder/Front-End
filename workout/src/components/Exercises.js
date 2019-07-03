import React, { Component } from 'react'
import PostExercises from './PostExercises'
import TargetArea from "./TargetArea"
import Sets from "./Sets"

export class Exercises extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {targetArea, sets, exercises} = this.props
        console.log("exercises",exercises)
        return (
            <div>
                <PostExercises/>
                {exercises.map(exercise => {
                return <div className="exerciseContainer" key={exercise.id}>
                    <h2 onClick={() => {
                        this.props.getSets()
                        this.props.getTargetArea()
                    }}>
                    {exercise.name}</h2>
                    <TargetArea targetArea = {targetArea}/>
                    <Sets sets = {sets} />
                </div>
                })}
            </div>
        )
    }
}

export default Exercises
