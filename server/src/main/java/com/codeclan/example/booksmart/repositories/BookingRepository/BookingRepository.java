package com.codeclan.example.booksmart.repositories.BookingRepository;

import com.codeclan.example.booksmart.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findBookingsByCustomerId(Long customerId);
    List<Booking> findBookingsByDate(LocalDate date);
}
