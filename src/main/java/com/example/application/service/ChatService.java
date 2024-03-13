package com.example.application.service;

import com.example.application.models.Message;
import com.example.application.models.User;
import com.example.application.repository.MessageRepository;
import com.example.application.repository.UserRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

import java.util.*;

@Service
public class ChatService {
    private final MessageRepository messageRepo;


    private final Map<Integer, Sinks.Many<Message>> chatContacts = new HashMap<>();
    private final Map<Integer, Flux<Message>> replayedFluxes = new HashMap<>();
    public ChatService(MessageRepository messageRepo, UserRepository userRepo) {
        this.messageRepo = messageRepo;
    }

    public Flux<Message> contact(User sender, User receiver) {
        Sinks.Many<Message> sink = chatContacts.computeIfAbsent(receiver.id, id -> Sinks.many().multicast().directBestEffort());
        return Flux.fromIterable(getMessagesByContact(sender, receiver));
    }

    public Message sendMessage(Message message) {
        Sinks.Many<Message> sink = chatContacts.get(message.receiver.getId());
        if (sink != null) {
            sink.emitNext(message, ((signalType, emitResult) -> emitResult == Sinks.EmitResult.FAIL_NON_SERIALIZED));
        }
        return messageRepo.save(message);
    }

    public List<Message> getMessagesByContact (User user1, User user2) {
        return messageRepo.getMessagesBySenderIsAndReceiverIsOrReceiverIsAndSenderIsOrderByTime(user1, user2, user1, user2);
    }

    public int CountAllUnViewedMessages () {
        return messageRepo.countMessagesByViewedIsFalse();
    }

    public int CountUnViewedMessages(User sender, User receiver) {
        return messageRepo.countMessagesByViewedIsFalseAndSenderIsAndReceiverIs(sender, receiver);
    }

    public Optional<Message> getLastMessage(User sender, User receiver) {
        return messageRepo.findNewestMessageByContact(sender.id, receiver.id);
    }

    public void MarkAsViewed(User sender, User receiver) {
        List<Message> messages = messageRepo.getMessagesByViewedIsFalseAndSenderIsAndReceiverIs(sender, receiver);
        messages.stream().map(message -> {
            message.setViewed(true);
            return messageRepo.save(message);
        });
    }
}
