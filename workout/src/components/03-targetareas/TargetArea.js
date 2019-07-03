import React, { Component } from 'react'
import Sets from "../04-sets/Sets"

export class TargetArea extends Component {
    render() {
        return (
            <div>
                {this.props.targetArea.map(target => {
                return <div key={target.id}>
                    <h2>{target.name}</h2>
                    <Sets sets = {this.props.sets}/>
                </div>
                })}
            </div>
        )
    }
}

export default TargetArea
