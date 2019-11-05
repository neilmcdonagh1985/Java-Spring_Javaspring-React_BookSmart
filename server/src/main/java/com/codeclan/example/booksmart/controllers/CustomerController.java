package com.codeclan.example.booksmart.controllers;

import com.codeclan.example.booksmart.models.Customer;
import com.codeclan.example.booksmart.repositories.CustomerRepository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping
    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    @GetMapping(value = "/bookings/customer-visits")
    public List<Customer> findAllCustomersOrderedByBookingSize(){
        return customerRepository.findAllCustomersOrderedByBookingSize();
    }



}
