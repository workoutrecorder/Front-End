import React, { Component } from 'react'
import Sets from "../04-sets/Sets"


export class TargetArea extends Component {
    render() {
        return (
            <div className ="targetarea-wrapper">
                {this.props.targetArea.map(target => {
                return <div key={target.id} className="targetarea-container">
                    <h4> TargetArea: {target.name}</h4>
                </div>
                })}
                <Sets sets = {this.props.sets}/>
            </div>
        )
    }
}

export default TargetArea
