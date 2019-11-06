import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { Scheduler, Appointments, DayView } from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

class Calendar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            calendarDate: new Date()
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    formatDateTime(date, time) {
        return new Date(date + "T" + time)
    }

    handleChangeDate = date => {
            this.setState({
            calendarDate: date
        });
    }

    render() {
        // console.log(this.state.bookingsData[0] && this.state.bookingsData[0].date);
        const bookingsData = [...this.props.bookingsData];
        // Map bookingsData to new array
        const calendarObjects = bookingsData.map(booking => {
            return {
                title: `${booking["_embedded"].customer.name} - ${booking["_embedded"].mesa.name}`,
                startDate: this.formatDateTime(booking.date, booking.startTime),
                endDate: this.formatDateTime(booking.date, booking.endTime),
                id: booking.id,
            }
        })

        return (
            <div>
                <div className="calendar">
                    <label>Select date:</label>
                    <DatePicker
                        className="calendar-date-picker"
                        selected={this.state.calendarDate}
                        onChange={this.handleChangeDate}
                    />
                    <div className="bookings-calendar">
                    <MuiThemeProvider theme={theme}>
                        <Paper>
                            <Scheduler data={calendarObjects}>
                                <ViewState currentDate={this.state.calendarDate} />
                                <DayView startDayHour={12} endDayHour={23} />
                                <Appointments />
                            </Scheduler>
                        </Paper>
                    </MuiThemeProvider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;