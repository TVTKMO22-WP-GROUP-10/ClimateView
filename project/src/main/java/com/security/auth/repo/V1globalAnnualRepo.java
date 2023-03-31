package com.security.auth.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.V1globalAnnual;

@Repository
public interface V1globalAnnualRepo extends JpaRepository<V1globalAnnual,Integer> {
    
}
