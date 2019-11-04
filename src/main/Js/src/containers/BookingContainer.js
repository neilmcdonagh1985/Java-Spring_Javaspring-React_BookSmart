import React, {Component} from 'react';
import NewBookingForm from '../components/NewBookingForm';


class BookingContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            data: []
        }
    }

    render() {
        return(
            <div>
                <NewBookingForm/>
            </div>
        )
    }
}

export default BookingContainer;