import React from 'react';
import CustomerDetail from './CustomerDetail';

const CustomersListItem = ({customers}) => {

    
        return customers.map((customer) => {
            console.log(customers)
            return (
                <CustomerDetail key={customer.id} customers={customers}   />
            )
        });

        return (
            <ul>
                {customers}
            </ul>
        )
    

    

    

}

export default CustomersListItem;