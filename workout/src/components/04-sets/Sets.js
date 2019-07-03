import React, { Component } from 'react'

export class Sets extends Component {
    render() {
        return (
            <div>
                {this.props.sets.map(set => {
                    return <div key={set.id}>
                        <h2> Reps: {set.reps}</h2>
                        <h2>Weight: {set.weight}</h2>                        
                    </div>
                })}
            </div>
        )
    }
}

export default Sets
