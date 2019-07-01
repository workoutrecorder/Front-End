import React, { Component } from 'react'

export class TargetArea extends Component {
    render() {
        let {targetArea} = this.props
        return (
            <div>
                {targetArea.map(target => {
                return <div key={target.id}>
                    <h2>{target.name}</h2>
                </div>
                })}
            </div>
        )
    }
}

export default TargetArea
