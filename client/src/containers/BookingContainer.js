import React, {Component} from 'react';
import NewBookingForm from '../components/NewBookingForm';
// import '../../public/style/style';

class BookingContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            data: []
        }
    }

    render() {
        return(
            <div className="booking-cont">
                <NewBookingForm/>
            </div>
        )
    }
}

export default BookingContainer;