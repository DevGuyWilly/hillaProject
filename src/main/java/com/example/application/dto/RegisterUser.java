package com.example.application.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.io.Serializable;

public record RegisterUser(
        @NotBlank(message = "Please enter your full name")
        String fullName,
        @NotBlank(message = "Please enter your email")
        @Email
        String email,
        @NotBlank(message = "Please enter password")
        String password,
        @NotBlank(message = "Please enter your phone number")
        String phone
) implements Serializable {
}
