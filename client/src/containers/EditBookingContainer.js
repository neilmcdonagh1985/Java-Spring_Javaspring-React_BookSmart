import React, {Component} from 'react';

class EditBookingContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBooking: null
        }
    }

    render() {
        return(
            <ul>
                {
                    this.props.bookings.map(booking => {
                        return(
                            <li key={booking.id}>
                                {booking['_embedded'].customer.name} <br/>
                                {booking.date} <br />
                                {booking.startTime} <br /><br />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}

export default EditBookingContainer;