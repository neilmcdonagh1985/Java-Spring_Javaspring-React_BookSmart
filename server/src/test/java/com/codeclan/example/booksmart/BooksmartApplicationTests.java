package com.codeclan.example.booksmart;

import com.codeclan.example.booksmart.models.Booking;
import com.codeclan.example.booksmart.models.Customer;
import com.codeclan.example.booksmart.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.booksmart.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.example.booksmart.repositories.MesaRepository.MesaRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import static org.junit.Assert.assertEquals;


@RunWith(SpringRunner.class)
@SpringBootTest
class BooksmartApplicationTests {

	@Autowired
	MesaRepository mesaRepository;

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void findBookingsByCustomerId(){
		List<Booking> found = bookingRepository.findBookingsByCustomerId(1L);
//		assertEquals(3, found.get(0).getNumOfGuests());
		assertEquals(new Long(1L), found.get(0).getId());
	}

	@Test
	public void findBookingsByDate(){
		LocalDate date = LocalDate.of(2017, Month.AUGUST, 23);
		List<Booking> found = bookingRepository.findBookingsByDate(date);
		assertEquals(4, found.size());
	}

	@Test
	public void findAllCustomersOrderedByBookingSize(){
	List<Customer> found = customerRepository.findAllCustomersOrderedByBookingSize();
	assertEquals("Liliana", found.get(0).getName());
	}

}
