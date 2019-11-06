package com.codeclan.example.booksmart.controllers;

import com.codeclan.example.booksmart.models.Mesa;
import com.codeclan.example.booksmart.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.booksmart.repositories.MesaRepository.MesaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping(value = "/mesas")
public class MesaController {

    @Autowired
    MesaRepository mesaRepository;


//    @GetMapping
//    public List<Mesa> getALlMesas(){
//        return mesaRepository.findAll();
//    }

    @GetMapping(value = "/search/available-tables")
    public List<Mesa> findAllAvailableMesas(@RequestParam LocalDate date, @RequestParam LocalTime time1, @RequestParam LocalTime time2) {
        return mesaRepository.findAllAvailableMesas(date, time1, time2);
    }
}
