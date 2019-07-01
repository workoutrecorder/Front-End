import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import Register from './Register'


const LogNav = (props) => {
    return ( 
        <div className = "lognav-wrapper">
                <Link to="/login" component = {Login}> Login </Link>
                <Link to="/register" component = {Register}>  Register </Link>
        </div>
     );
}
 
export default LogNav;