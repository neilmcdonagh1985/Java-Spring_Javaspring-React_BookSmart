import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
// import '/style/style.css';

const NavBar = () => (

    <ul className="nav-bar">
            <li>
                <Link to='/bookings'>Calendar</Link>
            </li>
            <li>
                <Link to='/new-booking'>New Booking</Link>
            </li>
            <li>
                <Link to='/edit-booking'>Edit Booking</Link>
            </li>
            <li>
                <Link to='/customers'>Customers</Link>
            </li>
        </ul>
)

export default NavBar;