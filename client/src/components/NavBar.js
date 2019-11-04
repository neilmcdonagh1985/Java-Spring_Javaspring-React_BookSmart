import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
// import '/style/style.css';

const NavBar = () => (

    <ul className="nav-bar">
        <li>
            <Link to='/new-booking'>New Booking</Link>
            <Link to='/customers'>Customers</Link>
        </li>
    </ul>

)

export default NavBar;