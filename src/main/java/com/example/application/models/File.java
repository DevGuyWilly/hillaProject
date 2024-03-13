package com.example.application.models;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "files")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public String fileName;
    public Long fileSize;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "message_id")
    public Message message;
}
