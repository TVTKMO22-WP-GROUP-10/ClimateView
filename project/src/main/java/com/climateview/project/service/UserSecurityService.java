package com.climateview.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.climateview.project.data.User;
import com.climateview.project.repository.UserRepository;

@Service
public class UserSecurityService {
    @Autowired
    UserRepository userRepo;

    public User register(String username, String password){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User u = new User(username, encoder.encode(password));
        userRepo.save(u);
        return u;
    }
}
