package com.example.application.models;

import com.example.application.dto.MessageDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "messages")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id = null;
    public Instant time = Instant.now();
    public String message;
    public boolean viewed = false;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id")
    public User sender;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_id")
    public User receiver;
    @OneToMany(mappedBy = "message", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    public List<File> files = new ArrayList<>();
    public MessageDTO toDTO() {
        return new MessageDTO(id, message, time, viewed, sender, receiver, files);
    }
}
