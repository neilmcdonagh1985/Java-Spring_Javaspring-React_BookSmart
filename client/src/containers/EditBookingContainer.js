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
                    <ul>
                        {
                            this.props.bookings.map((booking, index) => {
                                return (
                                    <div>
                                        <li key={booking.id}>
                                            {booking['_embedded'].customer.name} <br />
                                            {booking.date} <br />
                                            {booking.startTime} <br /><br />
                                        </li>
                                        <button onClick={this.handleSelect} value={index}>Edit</button>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    {this.state.selectedBooking && <EditBookingForm selectedBooking={this.state.selectedBooking} onBookingEdit={this.handleBookingEdit} key={this.state.selectedBooking.id} />}
                </div>
            </Fragment>
        );
    }
}

export default EditBookingContainer;