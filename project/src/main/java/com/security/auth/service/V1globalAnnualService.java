package com.security.auth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.V1globalAnnual;
import com.security.auth.repo.V1globalAnnualRepo;

@Service
public class V1globalAnnualService {
    
    @Autowired
    V1globalAnnualRepo repo;

    public List<V1globalAnnual> getv1data(){
        return repo.findAll();
    }

    
}