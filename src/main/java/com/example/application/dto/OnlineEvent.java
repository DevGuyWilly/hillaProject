package com.example.application.dto;

import dev.hilla.Nonnull;
import io.micrometer.common.lang.NonNull;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

public record OnlineEvent(
        @Nonnull Integer userId,
        @Nonnull UserStatus status
) implements Serializable {
}
