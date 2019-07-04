import React from 'react';
import axios from 'axios';


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
        console.log("props", this.props.exercise_id)
        axios.post(`${url}/exercises/${this.props.exercise_id}/targetarea`, 
        {
        name: this.state.name, 
        })
        .then(res => {
            console.log(res, this.state.name)
            console.log("SUCCESS")
        }).catch(err => {
            console.error(err)
        })
    }

    render() { 
        return ( 
        <div className = "posttargetarea-wrapper">
            <form>
                <input placeholder ="Name" name = "name" value = {this.state.name} onChange = {this.handleChanges} />
                <button onClick = {this.postTargetArea}> Post Target Area </button>
            </form>
        </div> 
        );
    }
}
 
export default PostTargetAreas;