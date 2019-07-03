import React, { Component } from 'react'
import Sets from "../04-sets/Sets"
import PostTargetAreas from "./PostTargetAreas"

export class TargetArea extends Component {
    render() {
        return (
            <div>
                {this.props.targetArea.map(target => {
                return <div key={target.id}>
                    <h2> TargetArea: {target.name}</h2>
                    <Sets sets = {this.props.sets}/>
                </div>
                })}
            </div>
        )
    }
}

export default TargetArea
