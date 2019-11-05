package com.codeclan.example.booksmart.controllers;

import com.codeclan.example.booksmart.models.Booking;
import com.codeclan.example.booksmart.repositories.BookingRepository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {
    @Autowired
    BookingRepository bookingRepository;

//    @GetMapping
//    public List<Booking> getAllBookings(){
//        return bookingRepository.findAll();
//    }

    @GetMapping(value = "/bookingDated/{date}")
    public List<Booking> findBookingsByDate(@PathVariable String date){
        String[] dateParts = date.split("-");
        int year = Integer.parseInt(dateParts[0]);
        int month = Integer.parseInt(dateParts[1]);
        int day = Integer.parseInt(dateParts[2]);

        LocalDate selectedDate = LocalDate.of(year, month, day);
        return bookingRepository.findBookingsByDate(selectedDate);


    }



}
