package com.codeclan.example.booksmart.components;

import com.codeclan.example.booksmart.models.Booking;
import com.codeclan.example.booksmart.models.Customer;
import com.codeclan.example.booksmart.models.Mesa;
import com.codeclan.example.booksmart.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.booksmart.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.example.booksmart.repositories.MesaRepository.MesaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Month;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    MesaRepository mesaRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader() {}

    public void run(ApplicationArguments args) {

        Mesa mesa1 = new Mesa("Table1", 6);
        mesaRepository.save(mesa1);

        Mesa mesa2 = new Mesa("Table2", 4);
        mesaRepository.save(mesa2);

        Mesa mesa3 = new Mesa("Table3", 4);
        mesaRepository.save(mesa3);

        Mesa mesa4 = new Mesa("Table4", 6);
        mesaRepository.save(mesa4);



        Customer customer1 = new Customer("Neil", "07562826673", "neil@hotmail.com" );
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Ian", "07889112321", "ian@gmail.com");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Liliana", "07889344322", "liliana@gmail.com");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Amanda", "07568997621", "amanda@gmail.com");
        customerRepository.save(customer4);

        Customer customer5 = new Customer("Jim", "07981726933", "jim@gmail.com");
        customerRepository.save(customer5);

        Customer customer6 = new Customer("Susan", "07341667245", "Susan@yahoo.co.uk");
        customerRepository.save(customer6);

        LocalTime time1 = LocalTime.of(4, 30, 00);
        LocalTime time2 = LocalTime.of(10, 45, 00);
        LocalTime time3 = LocalTime.of(10, 45, 00);
        LocalTime time4 = LocalTime.of(19, 30, 00);
        LocalTime endTime1 = LocalTime.of(12, 30, 00);
        LocalTime endTime2 = LocalTime.of(13, 15, 00);
        LocalTime endTime3 = LocalTime.of(21, 15, 00);
        LocalTime endTime4 = LocalTime.of(22, 00, 00);
        LocalDate date1 = LocalDate.of(2019, Month.NOVEMBER, 05);
        LocalDate date2 = LocalDate.of(2019, Month.NOVEMBER, 07);
        LocalDate date3 = LocalDate.of(2019, Month.OCTOBER, 21);
        LocalDate date4 = LocalDate.of(2019, Month.DECEMBER, 23);



        Booking booking1 = new Booking(date1, time1, endTime1, 3, customer1, mesa1);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking(date2, time2, endTime2, 4, customer2, mesa2);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking(date1, time1, endTime2, 5, customer3, mesa1);
        bookingRepository.save(booking3);

        Booking booking4 = new Booking(date2, time1, endTime2, 5, customer3, mesa1);
        bookingRepository.save(booking4);

        Booking booking5 = new Booking(date4, time4, endTime3, 6, customer4, mesa4);
        bookingRepository.save(booking5);

        Booking booking6 = new Booking(date3, time4, endTime4, 2, customer4, mesa3);
        bookingRepository.save(booking6);
        

    }




}
