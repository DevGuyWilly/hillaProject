package com.example.application.service;

import com.example.application.dto.OnlineEvent;
import com.example.application.dto.UserDTO;
import com.example.application.dto.UserStatus;
import com.example.application.models.User;
import com.example.application.repository.UserRepository;
import dev.hilla.exception.EndpointException;
import org.jboss.logging.Logger;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    public final Sinks.Many<OnlineEvent> userOnlineSink;
    public final Flux<OnlineEvent> userOnlineFlux;
    public static final List<Integer> usersOnline = new ArrayList<>();
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        userOnlineSink = Sinks.many().multicast().directBestEffort();
        userOnlineFlux = userOnlineSink.asFlux();
        this.userRepository = userRepository;
    }
    public Optional<UserDTO> findByEmail(String email) {
        return userRepository.findUserByEmail(email).map(User::toDTO);
    }

    public User login(String email, String password) {
        Optional<User> optionalUser = userRepository.findUserByEmail(email);
        if(optionalUser.isPresent()) {
            User user = optionalUser.get();
            Logger.getLogger(UserService.class).log(Logger.Level.INFO, email);
            return user.password.equals(password)? user : null;
        }
        return null;
    }

    public User register(User user) {
        var opl = userRepository.findUserByEmail(user.getEmail());
        if (opl.isPresent()) throw new EndpointException("Email is already registered");
        return opl.orElseGet(() -> userRepository.save(user));
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public List<User> searchUser(String searchKey) {
        return userRepository.findByFullNameOrEmail(searchKey);
    }

    public List<Integer> getUsersOnline() {
        return usersOnline;
    }

    public Flux<OnlineEvent> join() {
        return userOnlineFlux;
    }

    public void out(User user) {
        usersOnline.remove(user.id);
        OnlineEvent event = new OnlineEvent(user.id, UserStatus.OFFLINE);
        send(event);
    }
    public void send(OnlineEvent event) {
        if (event.status() == UserStatus.ONLINE)
            usersOnline.add(event.userId());
        else
            usersOnline.remove(event.userId());
        userOnlineSink.emitNext(event,
                (signalType, emitResult) -> emitResult == Sinks.EmitResult.FAIL_NON_SERIALIZED
        );
    }
}
