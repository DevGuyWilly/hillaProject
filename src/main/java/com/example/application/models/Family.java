package com.example.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "families")
public class Family {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;
    public String members;
    public String[] getMembers() {
        return members.split(",");
    }
}
