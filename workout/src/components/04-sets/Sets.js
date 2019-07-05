import React, { Component } from 'react'
import axios from "axios"

let url = 'http://localhost:3300'

export class Sets extends Component {
    state ={
        sets:this.props.sets
    }


    // Needs a page refresh
    deleteSets = (event, id) => {
        axios
          .delete(`${url}/sets/${id}`)
          .then(res => {
           console.log("set deleted");
           let setList = this.props.sets.filter(set => {
           return set.id !== id
           })
           
           this.setState({
            sets: setList
           })
        //    toast.success('Workout Deleted!')
            })
          .catch(err => {
            console.log(err);
          });
      };

render() {
    return (
        <div className ="sets-wrapper">
            {this.props.sets.map(set => {
                let reps = <h4>Reps: {set.reps}</h4>
                let weight = <h4>Weight: {set.weight}</h4>
                return <div key={set.id} className="sets-container">
                    <button onClick={e => this.deleteSets(e, set.id)}>Del</button>
                    {set.reps != '' ? reps : ''}
                    {set.weight != '' ? weight : ''}    
                </div>
            })}
        </div>
    )
}
}

export default Sets
