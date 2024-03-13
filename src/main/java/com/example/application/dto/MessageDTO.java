package com.example.application.dto;

import com.example.application.models.File;
import com.example.application.models.Message;
import com.example.application.models.User;

import java.io.Serializable;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record MessageDTO(
        Integer id,
        String message,
        Instant time,
        boolean viewed,
        User sender,
        User receiver
) implements Serializable {
}
