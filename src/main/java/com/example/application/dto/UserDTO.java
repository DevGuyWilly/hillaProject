package com.example.application.dto;

import java.io.Serializable;
import java.util.UUID;

public record UserDTO (
        Integer id,
        String fullName,
        String email,
        String avatar,
        String phone
) implements Serializable {
}
