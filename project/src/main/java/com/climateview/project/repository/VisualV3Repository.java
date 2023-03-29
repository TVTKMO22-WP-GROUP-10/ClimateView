package com.climateview.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climateview.project.data.VisualV3;

@Repository
public interface VisualV3Repository extends JpaRepository<VisualV3, Long> {
    
}
