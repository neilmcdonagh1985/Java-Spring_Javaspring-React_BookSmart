import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BookingContainer from './BookingContainer';
import CustomersList from '../components/CustomersList';
import '../style/style.css';

class Main extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        {/* <Route path="/bookings" component={Bookings}/> */}
                        <Route path="/new-booking" component={BookingContainer} />
                        {/* <Route path="/edit-booking" component={EditBooking}/> */}
                        <Route path="/customers" component={CustomersList} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default Main;