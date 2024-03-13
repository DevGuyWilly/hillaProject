package com.example.application.models;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity(name = "files")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class File implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public String fileName;
    public Long fileSize;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "message_id")
    public Message message;
}
