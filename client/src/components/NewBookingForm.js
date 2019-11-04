import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonExampleButton from './Button';


class NewBooking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            startTime: new Date(),
            name: "",
            phoneNumber: "",
            email: "",
            numberOfGuests: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleGuestsChange = this.handleGuestsChange.bind(this);
        // this.submitItem = this.submitItem.bind(this);
    }
    
    
    handleChangeDate = date => {
        this.setState({
            date: date
        });
    };

    setStartTime = time => {
        this.setState({
            startTime: time
        });
    };

    handleNameChange(event) {
        this.setState({name: event.target.value});
    };

    handlePhoneChange(event) {
        this.setState({phoneNumber: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleGuestsChange(event) {
        this.setState({numberOfGuests: event.target.value});
    }

    // submitItem(event) {
    //     event.preventDefault();
    //     const date = this.state.date;
    //     const startTime = this.state.startTime;
    //     const name = this.state.name.trim();
    //     const phoneNumber = this.state.phoneNumber.trim();
    //     const email = this.state.email.trim();
    //     const numberOfGuests = this.state.numberOfGuests.trim();

    // }
    
    render() {
        console.log('date',this.state.date)
        console.log('time',this.state.startTime)
        return (
            <form className="booking-form">
                <div className="form-title">
                    <h3>New Booking</h3>
                </div>
                <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChangeDate}
                />
                <DatePicker
                    selected={this.state.startTime}
                    onChange={time => this.setStartTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
                <button>Check Availability</button>
                <div className="form-title">
                    <h3>Available Tables</h3>
                </div>
                <div className="form-title">
                    <h3>Customer's Details</h3>
                </div>
                <label>Name:</label>
                <input 
                    type="text" 
                    placeholder="Enter customer's name" 
                    value={this.state.name}
                    onChange={this.handleNameChange}>
                </input>
                <label>Phone Number:</label>
                <input 
                    type="text" 
                    placeholder="Enter customer's phone number" 
                    value={this.state.phoneNumber}
                    onChange={this.handlePhoneChange}>
                </input>
                <label>E-mail:</label>
                <input 
                    type="text" 
                    placeholder="Enter customer's e-mail" 
                    value={this.state.email}
                    onChange={this.handleEmailChange}>
                </input>
                <label>Number of guests:</label>
                <input 
                    type="number" 
                    placeholder="Enter number of guests" 
                    value={this.state.numberOfGuests}
                    onChange={this.handleGuestsChange}>
                </input>
                <button  onClick={(event) => { if (window.confirm('confirm?')) this.submitItem(event) } }>

                Confirm Booking Details?
                </button>
            </form>
        );
    }
    

}
export default NewBooking;

