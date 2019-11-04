package com.codeclan.example.booksmart.repositories.CustomerRepository;

import com.codeclan.example.booksmart.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
