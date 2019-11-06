import React from 'react';

const TablesGrid = ({tables}) => {

    

    handleClickTable(event) {
        const selectedTable = event.target.value;

    };

   return tables.map((table) => {
       return (
           <ul>
               <li onClick={handleClickTable} key={table.id}>{table.name}</li>
           </ul>
       )
   });
}
export default TablesGrid;