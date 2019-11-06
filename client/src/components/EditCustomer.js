import React, { Component } from 'react';

class EditCustomer extends Component {

    constructor(props) {
        super(props);
        const { selectedCustomer } = props

        this.state = {
            id: selectedCustomer.id,
            name: selectedCustomer.name,
            phoneNumber: selectedCustomer.phoneNumber,
            email: selectedCustomer.email
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    handlePhoneChange = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    submitCustomerChanges(event) {
        event.preventDefault();
        const id = this.state.id
        const name = this.state.name;
        const phoneNumber = this.state.phoneNumber;
        const email = this.state.email;
        this.props.onEditCustomer({ id, name, phoneNumber, email });
    }

    render () {
        if (!this.props.selectedCustomer) return null;
        return (
            <form className="edit-cust-form">
                <label>Name:</label>
                    <input 
                        type="text" 
                        placeholder="Enter customer's name" 
                        value={this.state.name}
                        onChange={this.handleNameChange}>
                    </input>
                    <label>Phone Number:</label>
                    <input 
                        type="text" 
                        placeholder="Enter customer's phone number" 
                        value={this.state.phoneNumber}
                        onChange={this.handlePhoneChange}>
                    </input>
                    <label>E-mail:</label>
                    <input 
                        type="text" 
                        placeholder="Enter customer's e-mail" 
                        value={this.state.email}
                        onChange={this.handleEmailChange}>
                    </input>
                <div className="butt-book-form" >
                    <button onClick={ (event) => this.submitCustomerChanges(event) }>Submit changes</button>
                </div>
            </form>
        )
    }
}

export default EditCustomer;