package com.security.auth.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @DeleteMapping("/deleteuser/{uname}")
    public ResponseEntity<String>deleteUser(@PathVariable String uname){
        uService.deleteUser(uname);
        return ResponseEntity.ok().build();
    }
}
