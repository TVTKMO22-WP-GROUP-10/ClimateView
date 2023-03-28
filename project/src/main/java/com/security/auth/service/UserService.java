package com.security.auth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.User;
import com.security.auth.repo.PersonRepository;

@Service
public class UserService {
    
    @Autowired
    PersonRepository prepo;

    public List<User> getUsers(){
        return prepo.findAll();
    }

    
}
