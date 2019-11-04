import React, {Component} from 'react';
import CustomerDetail from './CustomerDetail';

class CustomersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customersData: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/customers')
            .then(response => response.json())
            .then(jasonData => this.setState({customersData: jasonData['_embedded'].customers}));
    }

    render() {

        return (
            <div>
                <CustomerDetail customers={this.state.customersData}/>
            </div>
            
        )
    }

}

export default CustomersList;