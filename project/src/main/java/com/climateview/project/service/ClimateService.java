package com.climateview.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.project.repository.VisualV3Repository;

@Service
public class ClimateService {

    @Autowired
    VisualV3Repository v3Repo;

}
