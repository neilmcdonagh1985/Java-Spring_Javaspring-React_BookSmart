import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import BookingContainer from './BookingContainer';

class Main extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router>
                <Fragment>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/new-booking" Component={BookingContainer}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default Main;