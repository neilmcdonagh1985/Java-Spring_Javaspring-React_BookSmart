import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (

    <ul>
        <li>
            <Link to='/new-booking'>New Booking</Link>
            <Link to='/customers'>Customers</Link>
        </li>
    </ul>

)

export default NavBar;