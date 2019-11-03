package com.codeclan.example.booksmart;

import com.codeclan.example.booksmart.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.booksmart.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.example.booksmart.repositories.MesaRepository.MesaRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


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

//	@Test
//	public void createMesa() {
//		Mesa table1 = new Mesa("table1", 4);
//		mesaRepository.save(table1);
//	}

//	@Test
//	public void





}
