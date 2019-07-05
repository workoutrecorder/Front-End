import React, { Component } from 'react'

export class ExerciseSummary extends Component {

    render() {
        return (
            <div className="exercise-side-container">
                <h2>{this.props.workout.name}</h2>
                <h2>{this.props.workout.date}</h2>
            </div>
        )
    }
}

export default ExerciseSummary
