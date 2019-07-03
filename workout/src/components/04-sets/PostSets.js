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

    postExercises = (event) =>{
        axios.post(`${url}/exercises/${1}/sets`, 
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
                <input placeholder ="reps" name = "reps" value = {this.state.reps} onChange = {this.handleChanges} />
                <input placeholder ="weight" name = "weight" value = {this.state.weight} onChange = {this.handleChanges} />
                <button onClick = {this.postSets}> Post Sets </button>
            </form>
        </div> 
        );
    }
}
 
export default PostSets;