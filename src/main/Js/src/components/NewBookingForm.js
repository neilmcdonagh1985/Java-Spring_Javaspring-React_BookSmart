import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class NewBooking extends Component {

    state = {
        date: new Date(),
        starTime: new Date()
    };
    
    handleChangeDate = date => {
        this.setState({
            date: date
        });
    };

    setStartTime = time => {
        this.setState({
            starTime: time
        });
    };
    
    render() {
        console.log('date',this.state.date)
        console.log('time',this.state.starTime)
        return (
            <form className="booking-form">
                <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChangeDate}
                />
                <DatePicker
                    selected={this.state.starTime}
                    onChange={time => this.setStartTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
                <label></label>
                <input>
                </input>
            </form>
        );
    }
    

}
export default NewBooking;

