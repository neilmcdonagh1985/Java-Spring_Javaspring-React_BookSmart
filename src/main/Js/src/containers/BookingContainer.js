import React, {Component} from 'react';

class BookingContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            data: [
                {
                    startTime: "12:00",
                    endTime: "14:00",
                    date: "01/12/2019",
                    numOfGuests: 3,
                    customerId: "Mr. Jonathan",
                    tableId: "2"
                }
            ]
        }
    }

    render() {
        return(
            <div>
                {this.state.data.startTime}
            </div>
        )
    }
}

export default BookingContainer;