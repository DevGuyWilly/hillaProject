package com.example.application.repository;

import com.example.application.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MessageRepository extends JpaRepository<Message, String>, JpaSpecificationExecutor<Message> {
}
