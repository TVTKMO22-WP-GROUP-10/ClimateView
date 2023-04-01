package com.security.auth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.V1Monthly;
import com.security.auth.data.V1Yearly;
import com.security.auth.repo.V1MonthlyRepository;
import com.security.auth.repo.V1YearRepository;

@Service
public class V1AllService {
    
    @Autowired
    V1YearRepository yearRepo;

    @Autowired
    V1MonthlyRepository monthlyRepo;

    public List<V1Yearly> getV1Yearly() {
        return yearRepo.findAll();
    }

    public List<V1Monthly> getV1Monthly() {
        return monthlyRepo.findAll();
    }
}