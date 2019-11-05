package com.codeclan.example.booksmart.controllers;

import com.codeclan.example.booksmart.models.Mesa;
import com.codeclan.example.booksmart.repositories.MesaRepository.MesaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/mesas")
public class MesaController {

    @Autowired
    MesaRepository mesaRepository;

    @GetMapping
    public List<Mesa> getALlMesas(){
        return mesaRepository.findAll();
    }
}
