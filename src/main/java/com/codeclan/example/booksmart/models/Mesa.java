package com.codeclan.example.booksmart.models;

public class Mesa {

    private String name;
    private int capacity;
    private Long id;

    public Mesa(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    public Mesa(){}


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
