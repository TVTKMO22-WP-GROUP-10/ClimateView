package com.security.auth.service.VisualV1Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.VisualV1.V1globalAnnual;
import com.security.auth.repo.VisualV1Repos.V1globalAnnualRepo;

@Service
public class V1globalAnnualService {
    
    @Autowired
    V1globalAnnualRepo repo;

    public List<V1globalAnnual> getv1data(){
        return repo.findAll();
    }

    
}