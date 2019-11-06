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
        this.handleCustomerEdit = this.handleCustomerEdit.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/customers/bookings/customer-visits')
            .then(response => response.json())
            .then(jsonData => this.setState({ customersData: jsonData }));
    }

    componentDidUpdate(prevState) {
        if(this.state.selectedCustomer !== prevState.selectedCustomer){
            fetch('http://localhost:8080/customers/bookings/customer-visits')
                .then(response => response.json())
                .then(jsonData => this.setState({ customersData: jsonData }));
        }
    }

    handleEditCust(event) {
        this.setState({ selectedCustomer: this.state.customersData[event.target.value] })
    }

    handleCustomerEdit(updatedCustomerDetail) {
        console.log('firreeeeee', updatedCustomerDetail)
        fetch(`http://localhost:8080/customers/${updatedCustomerDetail.id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCustomerDetail),
        })
        .then(res => {
            res.json();
            this.setState({selectedCustomer: null})
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    {this.state.selectedCustomer && 
                        <EditCustomer
                            selectedCustomer={this.state.selectedCustomer} 
                            onEditCustomer={this.handleCustomerEdit}
                        />
                    }
                </div>
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
            </Fragment>
        );
    }
}

export default CustomersList;