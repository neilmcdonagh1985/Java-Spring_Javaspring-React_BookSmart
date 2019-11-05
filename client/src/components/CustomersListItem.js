import React from 'react';
import CustomerDetail from './CustomerDetail';

const CustomersListItem = ({customers}) => {

    
        return customers.map((customer) => {
            console.log(customers)
            return (
                <ul>
                    <li 
                    // key={customer.id}
                    >
                    {/* {customer.name} */}

<link rel="stylesheet" key={customer.id} customer={customer.id} href={<CustomerDetail/>} >{customer.name} </link>
                    </li>

                    
                </ul>
            )
        });
    

    

    

}

export default CustomersListItem;