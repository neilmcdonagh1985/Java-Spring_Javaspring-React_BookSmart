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

        Mesa mesa4 = new Mesa("Table4", 2);
        mesaRepository.save(mesa4);

        Mesa mesa5 = new Mesa("Table5", 8);
        mesaRepository.save(mesa5);

        Mesa mesa6 = new Mesa("Table6", 2);
        mesaRepository.save(mesa6);

        Mesa mesa7 = new Mesa("Table7", 6);
        mesaRepository.save(mesa7);


        Customer customer1 = new Customer("Neil", "07562826673", "neil@hotmail.com" );
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Ian", "07889112321", "ian@gmail.com");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Liliana", "07889344322", "liliana@gmail.com");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Amanda", "07568997621", "amanda@gmail.com");
        customerRepository.save(customer4);

        Customer customer5 = new Customer("Colin F", "07562826673", "colin@hotmail.com");
        customerRepository.save(customer5);

        Customer customer6 = new Customer("Alex B", "07562826673", "alex@hotmail.com");
        customerRepository.save(customer6);

        Customer customer7 = new Customer("Sky S", "07562826673", "sky@hotmail.com");
        customerRepository.save(customer7);

        Customer customer8 = new Customer("Katie J", "07562826673", "katie@hotmail.com");
        customerRepository.save(customer8);

        LocalTime startTime1 = LocalTime.of(15, 30, 45);
        LocalTime endTime1 = LocalTime.of(16, 30, 00);

        LocalTime startTime2 = LocalTime.of(12, 45, 00);
        LocalTime endTime2 = LocalTime.of(14, 15, 00);

        LocalTime startTime3 = LocalTime.of(17, 45, 00);
        LocalTime endTime3 = LocalTime.of(19, 15, 00);

        LocalTime startTime4 = LocalTime.of(18, 45, 00);
        LocalTime endTime4 = LocalTime.of(20, 15, 00);

        LocalTime startTime5 = LocalTime.of(12, 45, 00);
        LocalTime endTime5 = LocalTime.of(13, 15, 00);

        LocalTime startTime6 = LocalTime.of(19, 00, 00);
        LocalTime endTime6 = LocalTime.of(20, 30, 00);

        LocalDate date1 = LocalDate.of(2019, Month.NOVEMBER, 10);
        LocalDate date2 = LocalDate.of(2019, Month.NOVEMBER, 07);

        Booking booking1 = new Booking(date1, startTime1, endTime1, 3, customer1, mesa1);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking(date2, startTime2, endTime2, 4, customer2, mesa2);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking(date2, startTime3, endTime3, 5, customer3, mesa3);
        bookingRepository.save(booking3);

        Booking booking4 = new Booking(date2, startTime4, endTime4, 2, customer4, mesa4);
        bookingRepository.save(booking4);

        Booking booking5 = new Booking(date2, startTime5, endTime5, 5, customer5, mesa5);
        bookingRepository.save(booking5);

        Booking booking6 = new Booking(date2, startTime4, endTime4, 2, customer6, mesa6);
        bookingRepository.save(booking6);

        Booking booking7 = new Booking(date2, startTime6, endTime6, 5, customer7, mesa7);
        bookingRepository.save(booking7);

        Booking booking8 = new Booking(date1, startTime2, endTime2, 5, customer8, mesa6);
        bookingRepository.save(booking8);

        Booking booking9 = new Booking(date2, startTime4, endTime4, 5, customer8, mesa6);
        bookingRepository.save(booking9);

        Booking booking10 = new Booking(date2, startTime1, endTime1, 5, customer8, mesa6);
        bookingRepository.save(booking10);

        Booking booking11 = new Booking(date1, startTime4, endTime4, 5, customer7, mesa6);
        bookingRepository.save(booking11);
    }




}
