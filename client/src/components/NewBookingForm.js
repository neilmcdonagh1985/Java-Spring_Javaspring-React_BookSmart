import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TablesGrid from './TablesGrid';

class NewBooking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            startTime: new Date(),
            endTime: new Date(),
            selectedTableId: null,
            name: "",
            phoneNumber: "",
            email: "",
            numOfGuests: "",
            tables: [],
            availableTables: []
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleGuestsChange = this.handleGuestsChange.bind(this);
        this.handleClickTable = this.handleClickTable.bind(this);
        // this.submitItem = this.submitItem.bind(this);
    }

    formatDate(date) {
        const d = new Date(date)
        let month = '' + (d.getMonth() +1)
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
        this.setState({numOfGuests: event.target.value});
    }

    handleClickTable(event) {
        this.setState({selectedTableId: event.target.value})

    }

    submitItem(event) {
        event.preventDefault();
        const date = this.formatDate(this.state.date);
        const startTime = this.formatTime(this.state.startTime);
        const endTime = this.formatTime(this.state.endTime);
        const name = this.state.name.trim();
        const phoneNumber = this.state.phoneNumber.trim();
        const email = this.state.email.trim();
        const numOfGuests = this.state.numOfGuests.trim();
        const selectedTableId = this.state.selectedTableId;

        if (!date || !startTime || !endTime || !name || !phoneNumber || !email || !numOfGuests || !selectedTableId)
        {
            return 
        }
        this.props.onBookingSubmit({date, startTime, endTime, name, phoneNumber, email, numOfGuests, selectedTableId});
        this.setState({
            date: new Date(),
            startTime: new Date(),
            endTime: new Date(),
            selectedTableId: null,
            name: "",
            phoneNumber: "",
            email: "",
            numOfGuests: ""
        });
    }

    componentDidMount() {
        fetch('http://localhost:8080/mesas')
            .then(response => response.json())
            .then(jasonData => this.setState({tables: jasonData['_embedded'].mesas}));
    }


    
    render() {
        return (
            <form className="booking-form">
                <div className="form-title">
                    <h3>New Booking</h3>
                </div>
                <div className="date-time-picker">
                    <div className="label-picker">
                        <label>Select date:</label>
                        <DatePicker
                            className="date-picker"
                            selected={this.state.date}
                            onChange={this.handleChangeDate}
                        />
                    </div>
                    
                    <div className="label-picker">
                        <label>Select start time:</label>
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
                        <label>Select end time:</label>
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
                    <button>Check Availability</button>
                </div>
                
                <div className="form-title">
                    <h3>Available Tables</h3>
                </div>

                <div className="table-display">
                <ul>
                    {
                        this.state.tables.map(table => {
                            return (
                                    <li onClick={this.handleClickTable} key={table.id} value={table.id}>
                                        {table.name}
                                    </li>
                            )
                        })
                    }
                </ul>
                    
                </div>

                <div className="form-title">
                    <h3>Customer's Details</h3>
                </div>

                <div className="cust-form">
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
                        value={this.state.numOfGuests}
                        onChange={this.handleGuestsChange}>
                    </input>
                </div>
                <div className="butt-book-form">
                    <button
                        onClick={ (event) => this.submitItem(event) }>
                        Confirm Booking Details?
                    </button>
                </div>
                
            </form>
        );
    }
    

}
export default NewBooking;

