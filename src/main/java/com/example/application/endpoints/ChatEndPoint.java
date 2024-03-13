package com.example.application.endpoints;

import com.example.application.models.Message;
import com.example.application.models.User;
import com.example.application.service.ChatService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.Endpoint;
import lombok.extern.log4j.Log4j2;
import reactor.core.publisher.Flux;

import java.util.List;

@Endpoint
@BrowserCallable
@AnonymousAllowed
@Log4j2
public class ChatEndPoint {
    private final ChatService chatService;
    public ChatEndPoint(ChatService chatService) {
        this.chatService = chatService;
    }

    public Flux<Message> contact(User sender, User receiver) {
        return chatService.contact(sender, receiver);
    }
    public Message send(Message message) {
        return chatService.sendMessage(message);
    }

    public int countUnViewed() {
        return chatService.CountAllUnViewedMessages();
    }

    public int CountByContact(User user1, User user2) {
        return chatService.CountUnViewedMessages(user1, user2);
    }

    public Message getLastMessageByContact(User sender, User receiver) {
        return chatService.getLastMessage(sender, receiver).orElse(null);
    }

    public List<Message> getMessages(User sender, User receiver) {
        return chatService.getMessagesByContact(sender, receiver);
    }

    public void markAsViewed(User sender, User receiver) {
        chatService.MarkAsViewed(sender, receiver);
    }
}
