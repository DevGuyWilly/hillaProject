package com.example.application.repository;

import com.example.application.models.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface FileRepository extends JpaRepository<File, String>, JpaSpecificationExecutor<File> {
}
