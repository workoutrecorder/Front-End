import React, { Component } from 'react'

export class Sets extends Component {
render() {
    return (
        <div className ="sets-wrapper">
            {this.props.sets.map(set => {
                return <div key={set.id} className="sets-container">
                    <h4> Reps: {set.reps}</h4>
                    <h4>Weight: {set.weight}</h4>    
                </div>
            })}
        </div>
    )
}
}

export default Sets
