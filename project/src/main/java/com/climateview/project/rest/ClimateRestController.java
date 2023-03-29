package com.climateview.project.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.climateview.project.data.User;
import com.climateview.project.service.ClimateService;
import com.climateview.project.service.UserSecurityService;

@RestController
public class ClimateRestController {
    @Autowired
    ClimateService climateControl;

    @Autowired
    UserSecurityService userService;

    //user liittyvät
    @PostMapping("register")
    public ResponseEntity<String> register(@RequestParam String username, @RequestParam String password){
        User u = userService.register(username, password);
        return new ResponseEntity<>(u.getUsername(), HttpStatus.OK);
    }

    //VisualV3 liittyvät
}
