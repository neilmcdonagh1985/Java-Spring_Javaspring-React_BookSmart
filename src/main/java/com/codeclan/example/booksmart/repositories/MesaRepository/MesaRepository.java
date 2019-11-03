package com.codeclan.example.booksmart.repositories.MesaRepository;

import com.codeclan.example.booksmart.models.Mesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MesaRepository extends JpaRepository<Mesa, Long> {
}
