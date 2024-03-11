package com.example.application.service;

import com.example.application.models.Person;
import com.example.application.repository.UserRepository;
import dev.hilla.crud.ListRepositoryService;

public class UserService extends ListRepositoryService<Person, String, UserRepository> {
}
