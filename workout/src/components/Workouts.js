import React, { Component } from 'react'

export class Workouts extends Component {
    constructor(){
    super();
    this.state = {
        workouts: [
            {name:'Leg Day', date: Date()},
            {name:'Bicep Day', date: Date()}
        ]
    }
    }
    render() {
        return (
            <div>
                {this.state.workouts.map(workout => {
                    return workout.name
                })}
            </div>
        )
    }
}

export default Workouts
