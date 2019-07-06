import React from 'react';
import axios from 'axios';
import { toast } from "react-toastify";


let url = 'http://localhost:3300'

class PostTargetAreas extends React.Component {
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

    postTargetArea = (event) =>{
        let userData =JSON.parse(localStorage.getItem('userdata'))
        if (this.state.name.length === 0){
            event.preventDefault()
            toast.error("Select a target area.")
        } else {
        axios.post(`${url}/exercises/${this.props.exercise_id}/targetarea`, 
        {
        name: this.state.name,
        user_id: userData.user_id
        })
        .then(res => {
            console.log(res, this.state.name)
            console.log("SUCCESS")
        }).catch(err => {
            console.error(err)
        })
        }
    }

    render() { 
        return ( 
        <div className = "posttargetarea-wrapper">
            <form>
                <select name ="name" value={this.state.name} onChange={this.handleChanges}>
                    <option value ="" disabled hidden>Select Target...</option>
                    <option value="Biceps">Biceps</option>
                    <option value="Triceps">Triceps</option>
                    <option value="Quads">Quads</option>
                    <option value="Calves">Calves</option>
                </select>
                <button onClick = {this.postTargetArea}> Target Area </button>
            </form>
        </div> 
        );
    }
}
 
export default PostTargetAreas;