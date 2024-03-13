package com.example.application.repository;

import com.example.application.models.Message;
import com.example.application.models.User;
import com.sun.jna.platform.win32.ShTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer>, JpaSpecificationExecutor<Message> {
    List<Message> getMessagesBySenderIsAndReceiverIsOrReceiverIsAndSenderIsOrderByTime(User sender, User receiver, User user1, User user2);
    int countMessagesByViewedIsFalse();
    int countMessagesByViewedIsFalseAndSenderIsAndReceiverIs(User sender, User receiver);

    @Query("""
                SELECT msg FROM Message msg
                WHERE msg.sender.id = ?1
                AND msg.receiver.id = ?2
                ORDER BY msg.time DESC
                LIMIT 1
            """)
    Optional<Message> findNewestMessageByContact(Integer sender, Integer receiver);
}
