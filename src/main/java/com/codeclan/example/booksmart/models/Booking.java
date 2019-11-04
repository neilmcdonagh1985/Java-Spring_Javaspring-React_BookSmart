package com.codeclan.example.booksmart.models;

//import java.sql.Time;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @Column(name = "end_time")
    private LocalTime endTime;

    @Column(name = "number_of_guests")
    private int numOfGuests;

    @JsonIgnoreProperties("booking")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;


//    @JsonFormat(pattern="yyyy-MM-dd")
//    private LocalDate birthday;



//    public Booking(String startTime, String endTime, String date, int numOfGuests) {
        public Booking(LocalDate date, LocalTime startTime, LocalTime endTime, int numOfGuests, Customer customer) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.numOfGuests = numOfGuests;
        this.customer = customer;
//        this.numOfGuests = numOfGuests;

    }

    public Booking() {}


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public int getNumOfGuests() {
        return numOfGuests;
    }

    public void setNumOfGuests(int numOfGuests) {
        this.numOfGuests = numOfGuests;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    //
//    public Customer getCustomer() {
//        return customer;
//    }
//
//    public void setCustomer(Customer customer) {
//        this.customer = customer;
//    }
}

// Booking booking1 = new Booking(15:00, date1)

// Date date1 = new date(fbsdfsbfgb)
