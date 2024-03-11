package com.example.application.service;

import com.example.application.models.Person;
import com.example.application.repository.UserRepository;
import com.example.application.utils.ExceptionSupplier;
import com.example.application.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) {
        Person person = userRepository.findPersonByEmailIs(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found"));
        return null;
    }
}
