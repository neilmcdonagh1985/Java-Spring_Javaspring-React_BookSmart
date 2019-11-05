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

    @Column(name = "startTime")
    private LocalTime startTime;

    @Column(name = "endTime")
    private LocalTime endTime;

    @Column(name = "numberOfGuests")
    private int numOfGuests;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "customerId", nullable = false)
    private Customer customer;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "mesaId", nullable = false)
    private Mesa mesa;


//    @JsonFormat(pattern="yyyy-MM-dd")
//    private LocalDate birthday;



//    public Booking(String startTime, String endTime, String date, int numOfGuests) {
        public Booking(LocalDate date, LocalTime startTime, LocalTime endTime, int numOfGuests, Customer customer, Mesa mesa) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.numOfGuests = numOfGuests;
        this.customer = customer;
        this.mesa = mesa;
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

    public Mesa getMesa() {
        return mesa;
    }

    public void setMesa(Mesa mesa) {
        this.mesa = mesa;
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
