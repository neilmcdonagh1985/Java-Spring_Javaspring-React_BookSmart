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
            <Fragment>
                <div className="cust-list">
                    <ul>
                        {this.state.customersData.map(customer => {
                            return (
                                <div>
                                    <li key={customer.id}>{customer.name}</li>
                                    <li key={customer.id}>{customer.phoneNumber}</li>
                                    <li key={customer.id}>{customer.email}</li>
                                    <li key={customer.id}>{customer.bookings.length}</li>
                                </div>
                            )
                        })
                        }
                    </ul>
                    {/* <CustomersListItem customers={this.state.customersData}/> */}
                </div>
            </Fragment>
        )
    }
}

export default CustomersList;