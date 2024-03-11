package com.example.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "files")
public class File {
    enum FileType {
        DOC, VIDEO, AUDIO, ZIP, APP, BINARY
    }
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;
    public String fileName;
    public int fileSize;
    public Enum<FileType> fileType;
}
