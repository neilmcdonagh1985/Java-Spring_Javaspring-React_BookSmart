import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import BookingContainer from './BookingContainer';
import NewBooking from '../components/NewBookingForm';

class Main extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return(
            <Router>
                <Fragment>
                    <NavBar/>
                    <Switch>
                        <Route path="/new-booking" component={BookingContainer}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default Main;