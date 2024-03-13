package com.example.application.models;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "families")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Family implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @OneToMany(mappedBy = "family")
    private List<User> members = new ArrayList<>();
}
