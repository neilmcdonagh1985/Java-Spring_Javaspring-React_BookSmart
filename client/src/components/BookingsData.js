// export const appointments = [
//     componentDidMount() {
//         fetch('http://localhost:8080/bookings')
//          .then(response => response.json())
//          .then(jsonData => this.setState({ appointments: jsonData['_embedded'].bookings }));
//     }
// ]



// const appointments = ({ bookings }) => {

//     return bookings.map((booking) => {
//         console.log(bookings)
//         return (
//                 { 
//                     // {booking.date},
//                     // {booking.startTime},
//                     // {booking.endTime},
//                     customerName: "Mr. Smith",
//                 startDate: new Date(2019, 11, 5, 12, 30),
//                 endDate: new Date(2019, 11 , 5, 13, 30),
//                 id: 0,
//                 tableNumber: "Table 1"

//                 }
//         )
//     }
// }

// export default BookingDetail;

export const appointments = [
    {
        title: "Mr. Smith",
        startDate: new Date(2019, 10, 5, 13, 30),
        endDate: new Date(2019, 10, 5, 15, 30),
        id: 0,
        location: "Table 1"
    }
];