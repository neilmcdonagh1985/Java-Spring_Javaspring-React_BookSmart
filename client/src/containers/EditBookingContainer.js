import React, { Component, Fragment } from 'react';
import EditBookingForm from '../components/EditBookingForm';

class EditBookingContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBooking: null
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event) {
        this.setState({ selectedBooking: this.props.bookings[event.target.value] });
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
                    {this.state.selectedBooking && <EditBookingForm selectedBooking={this.state.selectedBooking} key={this.state.selectedBooking.id} />}
                </div>
            </Fragment>
        );
    }
}

export default EditBookingContainer;