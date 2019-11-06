package com.codeclan.example.booksmart.repositories.MesaRepository;

import com.codeclan.example.booksmart.models.Mesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RepositoryRestResource
public interface MesaRepository extends JpaRepository<Mesa, Long> {

    @Query(
            value = "select * from mesas inner join bookings on bookings.mesa_id = mesas.id where bookings.date = ?1 and bookings.start_time not between ?2 and ?3",
//            value = "SELECT mesas.*" +
//            "FROM mesas" +
//                    "JOIN bookings ON bookings.mesa_id = mesas.id" +
//            "WHERE bookings.date = ?1" +
//                    "AND bookings.start_time NOT BETWEEN ?2 AND ?3",
            nativeQuery = true)
    List<Mesa> findAllAvailableMesas(LocalDate date, LocalTime time1, LocalTime time2);
}
