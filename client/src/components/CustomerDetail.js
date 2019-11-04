import React from 'react';

const CustomerDetail = ({customers}) => {

    
        return customers.map((customer) => {
            console.log(customers)
            return (
                <ul>
                    <li key={customer.id}>{customer.name}</li>
                    <li key={customer.id}>{customer.phoneNumber}</li>
                    <li key={customer.id}>{customer.email}</li>
                </ul>
            )
        });
    

    

    

}

export default CustomerDetail;