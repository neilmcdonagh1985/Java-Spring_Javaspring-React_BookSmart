package com.codeclan.example.booksmart;

import com.codeclan.example.booksmart.models.Booking;
import com.codeclan.example.booksmart.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.booksmart.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.example.booksmart.repositories.MesaRepository.MesaRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

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
		assertEquals(3, found.get(0).getNumOfGuests());
	}

//	@Test

//	@Test
//	public void createMesa() {
//		Mesa table1 = new Mesa("table1", 4);
//		mesaRepository.save(table1);
//	}

//	@Test
//	public void





}
