package com.codeclan.example.booksmart.models;

//import java.sql.Time;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @JsonFormat(pattern="dd-MM-yyyy")
    @Column(name = "date")
    private LocalDate date;

    @Column(name = "start_time")
    private LocalTime startTime;


//    @JsonFormat(pattern="yyyy-MM-dd")
//    private LocalDate birthday;



//    public Booking(String startTime, String endTime, String date, int numOfGuests) {
        public Booking(LocalDate date, LocalTime startTime) {
//        this.startTime = startTime;
//        this.endTime = endTime;
        this.date = date;
        this.startTime = startTime;
//        this.numOfGuests = numOfGuests;

    }
}

// Booking booking1 = new Booking(15:00, date1)

// Date date1 = new date(fbsdfsbfgb)
