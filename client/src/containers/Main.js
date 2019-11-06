import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BookingContainer from './BookingContainer';
import CustomersList from '../components/CustomersList';
import Calendar from '../components/Calendar';
import EditBookingContainer from './EditBookingContainer';
// import '../public/style/style.css';
import '../style/style.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.fetchAllBookings = this.fetchAllBookings.bind(this);
        this.addNewBooking = this.addNewBooking.bind(this);
    }

    componentDidMount() {
        this.fetchAllBookings()
    }

    fetchAllBookings() {
        fetch('http://localhost:8080/bookings')
            .then(response => response.json())
            .then(jsonData => this.setState({ data: jsonData['_embedded'].bookings }));
    }

    addNewBooking(booking) {
        this.setState(prevState => {
            return {
                data: [...prevState.data, booking]
            }
        })
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route path="/bookings" render={() => <Calendar bookingsData={this.state.data} />} />
                        <Route path="/new-booking" render={() => <BookingContainer onNewBookingAdded={this.addNewBooking} /> } />
                        <Route path="/edit-booking" render={() => <EditBookingContainer bookings={this.state.data} />} />
                        <Route path="/customers" component={CustomersList} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default Main;