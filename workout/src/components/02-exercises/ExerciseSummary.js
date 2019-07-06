import React, { Component } from 'react'

export class ExerciseSummary extends Component {
    
    render() {
        return (
            <div className="exercise-side-container">
                <h2>{this.props.workout.name}</h2>
                <h2>{this.props.workout.date}</h2>
                {this.props.exercises.map(exercise => {
                return <div>
                    <div key={exercise.id}>
                        <h4> {exercise.name}</h4>
                    </div>
                    <div>
                        {this.props.targetArea.map(target => {
                        let targets = <h4> {target.name}</h4>
                        return  <div key={target.id}>
                            {target.name !== '' && target.exercise_id === exercise.id ? targets : ''}
                        </div>
                        })}
                        {this.props.sets.map(set => {
                        let reps = <h4>Reps: {set.reps}</h4>
                        let weight = <h4>Weight: {set.weight}</h4>
                        return <div key={set.id}>
                            {set.reps !== '' && set.exercise_id === exercise.id ? reps : ''}
                            {set.weight !== '' && set.exercise_id === exercise.id ? weight : ''}    
                        </div>
                        })}
                    </div>
                </div>
                })}
            </div>
        )
    }
}

export default ExerciseSummary
