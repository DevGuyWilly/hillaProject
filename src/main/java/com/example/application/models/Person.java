package com.example.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "persons")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;
    public String firstName;
    public String lastName;
    public String email;
    public String avatar;
    public String familyId = null;
    public String phone = null;
}
