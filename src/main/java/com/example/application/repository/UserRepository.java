package com.example.application.repository;

import com.example.application.models.Person;
import dev.hilla.crud.CrudRepositoryService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Person, String>, JpaSpecificationExecutor<Person> {
    Optional<Person> findPersonByEmailIs(String email);
}
