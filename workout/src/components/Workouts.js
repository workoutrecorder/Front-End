import React from 'react'

const Workouts = (props) => {
    return (
        <div>
            {props.workouts.map(workout => {
                return <div key={workout.id}>
                    <h2>{workout.name}</h2>
                    <h3>{workout.date}</h3>
                </div>
            })}
        </div>
    )
}

export default Workouts

