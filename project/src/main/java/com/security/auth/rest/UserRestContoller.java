package com.security.auth.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.User;
import com.security.auth.service.UserService;

@RestController
public class UserRestContoller {

    @Autowired
    UserService uService;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return uService.getUsers();
    }
    
}
