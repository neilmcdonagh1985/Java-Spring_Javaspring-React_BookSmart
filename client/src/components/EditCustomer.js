import React, { Component } from 'react';

class EditCustomer extends Component {
    
    constructor(props) {
        super(props);
        const { selectedCustomer } = props

        this.state = {
            name: selectedCustomer.name,
            phoneNumber: selectedCustomer.phoneNumber,
            email: selectedCustomer.email
        }
    }

    render () {
        if (!this.props.selectedCustomer) return null;
        return(
            <form className="booking-form">
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
            </form>
        )
    }

}

export default EditCustomer;