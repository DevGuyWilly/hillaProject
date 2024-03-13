package com.example.application.repository;

import com.example.application.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {
    Optional<User> findUserByEmail(String email);
    @Query("""
            select u from User u where upper(u.fullName)
            like upper(concat('%',?1,'%')) and upper(u.email) like upper(concat('%',?1,'%'))
            """)
    List<User> findByFullNameOrEmail(String searchKey);
}
