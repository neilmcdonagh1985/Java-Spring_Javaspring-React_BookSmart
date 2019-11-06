import React from "react";
import { render } from "react-dom";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { Scheduler, Appointments, DayView } from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

class Calendar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    formatDateTime(date, time) {
        return new Date(date + "T" + time)
    }

    render() {
        // console.log(this.state.bookingsData[0] && this.state.bookingsData[0].date);
        const bookingsData = [...this.props.bookingsData];
        // Map bookingsData to new array
        const calendarObjects = bookingsData.map(booking => {
            return {
                id: booking.id,
                title: booking["_embedded"].customer.name,
                location: booking["_embedded"].mesa.name,
                startDate: this.formatDateTime(booking.date, booking.startTime),
                endDate: this.formatDateTime(booking.date, booking.endTime)
            }
        })

        return (
            <div className="calendar">
                <MuiThemeProvider theme={theme}>
                    <Paper>
                        <Scheduler data={calendarObjects}>
                            <ViewState currentDate={new Date()} />
                            <DayView startDayHour={12} endDayHour={23} />
                            <Appointments />
                        </Scheduler>
                    </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Calendar;