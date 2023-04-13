package com.security.auth.service.VisualV1Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.VisualV1.V1Monthly;
import com.security.auth.data.VisualV1.V1Reconstruction;
import com.security.auth.data.VisualV1.V1Yearly;
import com.security.auth.repo.VisualV1Repos.V1MonthlyRepository;
import com.security.auth.repo.VisualV1Repos.V1ReconstructionRepo;
import com.security.auth.repo.VisualV1Repos.V1YearRepository;

@Service
public class V1AllService {
    
    @Autowired
    V1YearRepository yearRepo;

    @Autowired
    V1MonthlyRepository monthlyRepo;

    @Autowired
    V1ReconstructionRepo recoRepo;

    public List<V1Yearly> getV1Yearly() {
        return yearRepo.findAll();
    }

    public List<V1Monthly> getV1Monthly() {
        return monthlyRepo.findAll();
    }

    public List<V1Reconstruction> getV1Reconstruction(){
        return recoRepo.findAll();
    }
}