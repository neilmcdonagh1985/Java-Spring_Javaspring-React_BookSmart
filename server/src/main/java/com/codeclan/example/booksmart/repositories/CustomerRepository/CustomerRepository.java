package com.codeclan.example.booksmart.repositories.CustomerRepository;

import com.codeclan.example.booksmart.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Query("select c from Customer c order by c.bookings.size desc")
    List<Customer> findAllCustomersOrderedByBookingSize();
}
