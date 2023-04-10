package com.security.auth.repo.VisualV5Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.VisualV5.V5Data;

@Repository
public interface V5AllRepository extends JpaRepository<V5Data, String>{
    
}
