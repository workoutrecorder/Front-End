import React from 'react';
import axios from 'axios';


let url = 'http://localhost:3300'
let userData =JSON.parse(localStorage.getItem('userdata'))

class PostExercises extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
         }
    }

    handleChanges = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    postExercises = (event) =>{
        let workout_id = window.location.pathname.split("/")[1]
        axios.post(`${url}/workouts/${workout_id}/exercises`, 
        {
        name: this.state.name, 
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
        <div className = "postexercise-wrapper">
            <form>
                <input placeholder ="Name" name = "name" value = {this.state.name} onChange = {this.handleChanges} />
                <button onClick = {this.postExercises}> Exercise </button>
            </form>
        </div> 
        );
    }
}
 
export default PostExercises;