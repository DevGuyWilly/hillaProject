package com.example.application.service;

import com.example.application.models.Message;
import com.example.application.models.User;
import com.example.application.repository.MessageRepository;
import com.example.application.repository.UserRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class ChatService {
    private final MessageRepository messageRepo;
    private final Map<Integer, Sinks.Many<Message>> chatContacts = new ConcurrentHashMap<>();
    private final Map<Integer, Flux<Message>> replayedFluxes = new ConcurrentHashMap<>();
    public ChatService(MessageRepository messageRepo, UserRepository userRepo) {
        this.messageRepo = messageRepo;
    }

    public Flux<Message> contact(Integer userId) {
        Sinks.Many<Message> sink = chatContacts.computeIfAbsent(userId, id -> Sinks.many().multicast().directBestEffort());
        return replayedFluxes.computeIfAbsent(userId, id -> sink.asFlux());
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
}
