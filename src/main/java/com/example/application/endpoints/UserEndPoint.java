package com.example.application.endpoints;

import com.example.application.dto.OnlineEvent;
import com.example.application.dto.UserDTO;
import com.example.application.models.User;
import com.example.application.service.ChatService;
import com.example.application.service.UserService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;
import org.jboss.logging.Logger;
import reactor.core.publisher.Flux;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Endpoint
@BrowserCallable
@AnonymousAllowed
public class UserEndPoint {
    private final UserService userService;

    public UserEndPoint(UserService userService) {
        this.userService = userService;
    }

    public String currentThread() {
        return Thread.currentThread().toString();
    }

    public User register(User user) {
        return userService.register(user);
    }
    public User login(String email, String password) {
        Logger.getLogger(UserEndPoint.class).log(Logger.Level.DEBUG, email);
        return userService.login(email, password);
    }

    public List<@Nonnull User> findAll() {
        return userService.getAll();
    }

    public Optional<UserDTO> findByEmail(@Nonnull String email) {
        return userService.findByEmail(email);
    }

    public List<@Nonnull Integer> findUsersOnline() {
        return userService.getUsersOnline();
    }

    public Flux<@Nonnull OnlineEvent> join() {
        return userService.join();
    }
    public void out(User user) {
        userService.out(user);
    }

    public void send(@Nonnull OnlineEvent userId) {
        userService.send(userId);
    }

    public List<@Nonnull User> searchUser(@Nonnull String searchKey) {
        return userService.searchUser(searchKey);
    }
}
