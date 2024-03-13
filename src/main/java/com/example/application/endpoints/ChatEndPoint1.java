package com.example.application.endpoints;

import com.example.application.models.Message;
import com.example.application.models.User;
import com.example.application.service.ChatService1;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.Endpoint;
import lombok.extern.log4j.Log4j2;
import reactor.core.publisher.Flux;

@Endpoint
@BrowserCallable
@AnonymousAllowed
@Log4j2
public class ChatEndPoint1 {
    private final ChatService1 chatService;

    public ChatEndPoint1(ChatService1 chatService){
        this.chatService = chatService;
    }

    public Flux<Message> getMessages(User sender, User receiver) {
        return chatService.getPrivateChatMessages(sender, receiver);
    }

    public Message sendMessage(Message message) {
        return chatService.sendMessage(message);
    }
}
