import React, { Component, Fragment } from 'react';
import EditBookingForm from '../components/EditBookingForm';

class EditBookingContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBooking: null
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleBookingEdit = this.handleBookingEdit.bind(this);
    }

    handleSelect(event) {
        this.setState({ selectedBooking: this.props.bookings[event.target.value] });
    }

    handleBookingEdit(updatedBookingDetail) {
        fetch(`http://localhost:8080/bookings/${this.state.selectedBooking.id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBookingDetail),
        })
        .then(res => res.json())
        .then(updatedBooking => this.props.onBookingUpdated(updatedBooking));
    }

    render() {
        return (
            <Fragment>
                <div>
                    {this.state.selectedBooking && <EditBookingForm selectedBooking={this.state.selectedBooking} onBookingEdit={this.handleBookingEdit} key={this.state.selectedBooking.id} />}
                </div>
                
                <table className="cust-table">
                    <thead>
                        <tr>
                            <th>Customer's Name</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Number of Guests</th>
                            <th>Table</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bookings.map((booking, i) =>
                            <tr key={i}>
                                <td >{booking['_embedded'].customer.name}</td>
                                <td >{booking.date} </td>
                                <td >{booking.startTime}</td>
                                <td >{booking.endTime}</td>
                                <td >{booking.numOfGuests}</td>
                                <td >{booking[`_embedded`].mesa.name}</td>
                                <td>
                                <button onClick={this.handleSelect} value={i}>Edit</button>                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
            
            </Fragment>
        )
    }
}

export default EditBookingContainer;