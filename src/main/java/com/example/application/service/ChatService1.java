package com.example.application.service;

import com.example.application.models.Message;
import com.example.application.models.User;
import com.example.application.repository.MessageRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;

@Service
public class ChatService1 {
    private final MessageRepository msgRepo;
    private FluxSink<Message> messageSink;
    public ChatService1(MessageRepository msgRepo) {
        this.msgRepo = msgRepo;
    }
    public Flux<Message> getPrivateChatMessages(User sender, User receiver) {
        return Flux.create(fluxSink -> {
            this.messageSink = fluxSink;
            msgRepo.getMessagesBySenderIsAndReceiverIsOrReceiverIsAndSenderIsOrderByTime(sender, receiver, sender, receiver)
                    .forEach(message -> messageSink.next(message));
        });
    }
    public Message sendMessage(Message message) {
        if(messageSink != null) {
            messageSink.next(message);
        }
        return msgRepo.save(message);
    }
}
