package com.security.auth.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.V1Monthly;

@Repository
public interface V1MonthlyRepository extends JpaRepository<V1Monthly,Integer> {}
