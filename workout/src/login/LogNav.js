import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import Register from './Register'


const LogNav = (props) => {
    return ( 
        <div>
            <nav>
                <Link to="/login" component = {Login}> Login </Link>
                <Link to="/register" component = {Register}>  Register </Link>
            </nav>
        </div>
     );
}
 
export default LogNav;