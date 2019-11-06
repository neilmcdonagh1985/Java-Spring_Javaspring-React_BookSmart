import React, { Component, Fragment } from 'react';

class CustomersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customersData: []
        
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/customers/bookings/customer-visits')
            .then(response => response.json())
            .then(jsonData => this.setState({ customersData: jsonData }));
    }

    handleClick(event) {

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
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.customersData.map((customer, i) =>
                        <tr key={i}>
                            <td key={i}>{customer.name}</td>
                            <td key={i}>{customer.phoneNumber}</td>
                            <td key={i}>{customer.email}</td>
                            <td key={i}>{customer.bookings.length}</td>
                            <td>
                            <button onlick={this.handleClick}>Edit</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    } 
        
    
}

export default CustomersList;