package com.security.auth.service.VisualV3services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.VisualV3.V3temp;
import com.security.auth.repo.VisualV3Repos.V3TempRepo;

@Service
public class V3TempService {
    @Autowired
    V3TempRepo tempRepo;

    public List<V3temp> getTempData(){
        return tempRepo.getTempData();
    }
}
