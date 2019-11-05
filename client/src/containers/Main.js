import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BookingContainer from './BookingContainer';
import CustomersList from '../components/CustomersList';
import Calendar from '../components/Calendar';
// import '../public/style/style.css';
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
                        <Route path="/bookings" component={Calendar}/>
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