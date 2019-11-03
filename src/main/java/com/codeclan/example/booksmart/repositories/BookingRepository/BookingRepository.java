package com.codeclan.example.booksmart.repositories.BookingRepository;

import com.codeclan.example.booksmart.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
