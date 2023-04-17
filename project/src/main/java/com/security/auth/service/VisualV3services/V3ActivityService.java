package com.security.auth.service.VisualV3services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.VisualV3.V3activities;
import com.security.auth.repo.VisualV3Repos.V3ActivityRepo;

@Service
public class V3ActivityService {

    @Autowired
    V3ActivityRepo v3Repo;

    public List<V3activities> getActivityData(){
        return v3Repo.getActivityData();
    }
}
