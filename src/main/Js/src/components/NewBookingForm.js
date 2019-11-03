import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import DatePickers from './callendarPicker';

const NewBooking = () => (

    <form className="booking-form">
        <DatePickers/>
        <label></label>
        <input>
        </input>
        <p>booking form</p>

    </form>
    
    

)
export default NewBooking;

