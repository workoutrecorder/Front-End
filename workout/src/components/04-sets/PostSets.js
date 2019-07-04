import React from 'react';
import axios from 'axios';


let url = 'http://localhost:3300'

class PostSets extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            reps: "",
            weight:""
         }
    }

    handleChanges = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    postSets = (event) =>{
        axios.post(`${url}/exercises/${this.props.exercise_id}/sets`, 
        {
        reps: this.state.reps,
        weight: this.state.weight, 
        })
        .then(res => {
            console.log(res)
            console.log("SUCCESS")
        }).catch(err => {
            console.error(err)
        })
    }

    render() { 
        return ( 
        <div className = "postsets-wrapper">
            <form>
                <input placeholder ="Reps" name = "reps" value = {this.state.reps} onChange = {this.handleChanges} />
                <input placeholder ="Weight" name = "weight" value = {this.state.weight} onChange = {this.handleChanges} />
                <button onClick = {this.postSets}> Post Sets </button>
            </form>
        </div> 
        );
    }
}
 
export default PostSets;