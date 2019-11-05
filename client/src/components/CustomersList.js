import React, {Component} from 'react';
import CustomersListItem from './CustomersListItem';

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
            <div className="cust-list">
                <CustomersListItem customers={this.state.customersData}/>
                
            </div>
            
        )
    }

}

export default CustomersList;