import React, { Component, Fragment } from 'react';

class CustomersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customersData: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/customers/bookings/customer-visits')
            .then(response => response.json())
            .then(jsonData => this.setState({ customersData: jsonData }));
    }

    render() {
        return (
            <table className="cust-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>E-mail</th>
                        <th>Number of Bookings</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.customersData.map((customer, i) =>
                        <tr key={i}>
                            <td key={i}>{customer.name}</td>
                            <td key={i}>{customer.phoneNumber}</td>
                            <td key={i}>{customer.email}</td>
                            <td key={i}>{customer.bookings.length}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    } 
        
    
}

export default CustomersList;