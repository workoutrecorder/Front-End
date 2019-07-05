import React, { Component } from 'react'
import Sets from "../04-sets/Sets"
import axios from "axios"

let url = 'http://localhost:3300'

export class TargetArea extends Component {
    state ={
        targetArea:this.props.targetArea
    }


    // Needs a page refresh
    deleteTargetarea = (event, id) => {
        axios
          .delete(`${url}/targets/${id}`)
          .then(res => {
           console.log("target area deleted");
           let targetList = this.props.targetArea.filter(target => {
           return target.id !== id
           })
           
           this.setState({
            targetArea: targetList
           })
        //    toast.success('Workout Deleted!')
            })
          .catch(err => {
            console.log(err);
          });
      };

    render() {
        return (
            <div className ="targetarea-wrapper">
                {this.props.targetArea.map(target => {
                    let targets = <h4> {target.name}</h4>
                return  <div key={target.id} className="targetarea-container">
                                {target.name !== '' ? targets : ''}
                                <i className="fas fa-dumpster" onClick={e => this.deleteTargetarea(e, target.id)}/>
                            </div>
                })}
                      
                            <Sets sets = {this.props.sets}/>
                        
            </div>
        )
    }
}

export default TargetArea
