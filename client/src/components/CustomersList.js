import React, { Component, Fragment } from 'react';
import EditCustomer from './EditCustomer'

class CustomersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customersData: [],
            selectedCustomer: null
        
        }
        this.handleEditCust = this.handleEditCust.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/customers/bookings/customer-visits')
            .then(response => response.json())
            .then(jsonData => this.setState({ customersData: jsonData }));
    }

    handleEditCust(event) {
        this.setState({ selectedCustomer: this.state.customersData[event.target.value]})
    }

    render() {
        return (
            <Fragment>
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
                                <td >{customer.name}</td>
                                <td >{customer.phoneNumber}</td>
                                <td >{customer.email}</td>
                                <td >{customer.bookings.length}</td>
                                <td>
                                <button value={i} onClick={this.handleEditCust}>Edit</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div>
                    {this.state.selectedCustomer && 
                    <EditCustomer selectedCustomer={this.state.selectedCustomer} 
                    key={this.state.selectedCustomer.id} />}
                </div>
            </Fragment>
        );
    } 
        
    
}

export default CustomersList;