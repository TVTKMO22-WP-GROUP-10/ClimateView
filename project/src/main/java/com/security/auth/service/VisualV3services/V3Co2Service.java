package com.security.auth.service.VisualV3services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.VisualV3.V3co2;
import com.security.auth.repo.VisualV3Repos.V3co2Repo;

@Service
public class V3Co2Service {
    
    @Autowired
    V3co2Repo co2Repo;
    
    public List<V3co2> getCo2Data(){
        return co2Repo.getCo2Data();
    }
}