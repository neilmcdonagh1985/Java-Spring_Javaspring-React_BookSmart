import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import BookingContainer from './BookingContainer';
import Button from '../components/Button';
import CustomersList from '../components/CustomersList';
// import '../public/style/style.css';
class Main extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return(
            <Router>
                <Fragment>
                    {/* <Button/> */}
                    <NavBar/>
                    <Switch>
                        <Route path="/new-booking" component={BookingContainer}/>
                    </Switch>
                    <Switch>
                        <Route path="/customers" component={CustomersList}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default Main;