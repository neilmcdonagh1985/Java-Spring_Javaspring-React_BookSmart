import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

    <ul className="nav-bar">
        <li>
            <Link to='/'>BookSmart</Link>
        </li>
        <li>
            <Link to='/bookings'>Calendar</Link>
        </li>
        <li>
            <Link to='/new-booking'>New Booking</Link>
        </li>
        <li>
            <Link to='/edit-booking'>Bookings</Link>
        </li>
        <li>
            <Link to='/customers'>Customers</Link>
        </li>
    </ul>
)

export default NavBar;