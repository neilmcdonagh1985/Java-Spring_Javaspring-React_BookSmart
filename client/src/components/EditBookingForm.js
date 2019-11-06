import React, { Component } from 'react';
import { isThisISOWeek } from 'date-fns/esm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditBookingForm extends Component {

    constructor(props) {
        super(props);
        const { selectedBooking } = props

        this.state= {
            date: new Date(selectedBooking.date),
            startTime: new Date(selectedBooking.date + 'T' + selectedBooking.startTime),
            endTime: new Date(selectedBooking.date + 'T' + selectedBooking.endTime),
            numOfGuests: selectedBooking.numOfGuests,
        };
        this.handleNumOfGuestsChange = this.handleNumOfGuestsChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleStartTime = this.handleStartTime.bind(this);
        this.handleEndTime = this.handleEndTime.bind(this);
        this.submitBookingChanges = this.submitBookingChanges.bind(this);
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('getDerivedStateFromProps', nextProps, prevState)
    //     if (nextProps.selectedBooking && 
    //         nextProps.selectedBooking.numOfGuests !== prevState.numOfGuests) {
    //         return { numOfGuests: nextProps.selectedBooking.numOfGuests };
    //     }
    //     else return null;
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.selectedBooking && prevProps.selectedBooking.numOfGuests !== this.props.numOfGuests) {
    //         //Perform some operation here
    //         this.setState({ someState: this.props.numOfGuests });
    //         // this.classMethod();
    //     }
    // }

    formatDate(date) {
        const d = new Date(date)
        let month = '' + (d.getMonth() + 1)
        if (month.length < 2) { month = '0' + month }
        let day = '' + d.getDate()
        if (day.length < 2) { day = '0' + day }
        let year = d.getFullYear()
        return [year, month, day].join('-');
    }

    formatTime(time) {
        const d = new Date(time)
        let hour = '' + (d.getHours())
        if (hour.length < 2) { hour = '0' + hour }
        let minutes = '' + d.getMinutes()
        if (minutes.length < 2) { minutes = '0' + minutes }
        let seconds = '' + d.getSeconds()
        if (seconds.length < 2) { seconds = '0' + seconds }
        return [hour, minutes, seconds].join(':');
    }

    handleNumOfGuestsChange(e) {
        this.setState({ numOfGuests: e.target.value })
    }

    handleChangeDate = date => {
        this.setState({
            date: date
        });
    };
    handleStartTime = startTime => {
        this.setState({
            startTime: startTime
        });
    };

    handleEndTime = endTime => {
        this.setState({
            endTime: endTime
        });
    };

    submitBookingChanges(event) {
        event.preventDefault();
        const date = this.formatDate(this.state.date);
        const startTime = this.formatTime(this.state.startTime);
        const endTime = this.formatTime(this.state.endTime);
        const numOfGuests = this.state.numOfGuests;
        this.props.onBookingEdit({ date, startTime, endTime, numOfGuests });
    }

    render() {
        if (!this.props.selectedBooking) return null;
        return(
            <form className="booking-form">

                <div className="date-time-picker">
                    <div className="label-picker">
                        <label>Date:</label>
                        <DatePicker
                            className="date-picker"
                            selected={this.state.date}
                            onChange={startDate => this.handleChangeDate(startDate)}
                        />
                    </div>

                    <div className="label-picker">
                        <label>Start time:</label>
                        <DatePicker
                            className="date-picker"
                            selected={this.state.startTime}
                            onChange={startTime => this.handleStartTime(startTime)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                        />
                    </div>

                    <div className="label-picker">
                        <label>End time:</label>
                        <DatePicker
                            className="date-picker"
                            selected={this.state.endTime}
                            onChange={endTime => this.handleEndTime(endTime)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                        />
                    </div>
                </div>

                <div className="cust-form">

                    <label>Number of guests:</label>
                    <input
                        type="number"
                        placeholder="Enter number of guests"
                        value={this.state.numOfGuests}
                        onChange={this.handleNumOfGuestsChange}>
                    </input>
                </div>
                <div className="butt-book-form" >
                    <button onClick={ (event) => this.submitBookingChanges(event) }>Submit changes</button>
                </div>
            </form>
            
            )
    }

}

export default EditBookingForm;