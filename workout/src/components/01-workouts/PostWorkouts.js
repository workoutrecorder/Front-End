import React from 'react';
import axios from 'axios';
import { toast } from "react-toastify";


let url = 'http://localhost:3300'

class PostWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            date: ""
         }
    }

    handleChanges = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    postWorkouts = (event) =>{
        event.preventDefault()
        let userData =JSON.parse(localStorage.getItem('userdata'))
        if (this.state.name.length < 1 || this.state.date.length < 1){
            toast.error("Make sure to enter a name and a date.")
        } else {
        axios.post(`${url}/users/${userData.user_id}/workouts`, 
        {
        name: this.state.name, 
        date: this.state.date
        })
        .then(res => {
            console.log(res)
            console.log("SUCCESS")
            window.location.reload()
        }).catch(err => {
            console.error(err)
        })
    }
    }

    render() { 
        return ( 
        <div className = "postworkouts-wrapper">
            <form>
                <input placeholder ="name" name = "name" value = {this.state.name} onChange = {this.handleChanges} />
                <input placeholder ="date" name = "date" value = {this.state.date} onChange = {this.handleChanges}/>
                <button onClick = {this.postWorkouts}> Post </button>
            </form>
        </div> 
        );
    }
}
 
export default PostWorkouts;