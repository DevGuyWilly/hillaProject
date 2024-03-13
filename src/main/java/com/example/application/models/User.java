package com.example.application.models;

import com.example.application.dto.UserDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Table(name = "users")
@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public String fullName;
    @Column(unique = true)
    public String email;
    public String avatar = null;
    public String password;
    public String phone = null;

    @ManyToOne
    @JoinColumn(name = "family_id")
    public Family family;

    public UserDTO toDTO() {
        return new UserDTO(id, fullName, email, avatar, phone);
    }
}
