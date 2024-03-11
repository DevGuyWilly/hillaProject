package com.example.application.service;

import com.example.application.models.Message;
import com.example.application.repository.MessageRepository;
import dev.hilla.crud.ListRepositoryService;

public class MessageService extends ListRepositoryService<Message, String, MessageRepository> {
}
