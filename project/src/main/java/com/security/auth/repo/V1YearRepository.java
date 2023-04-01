package com.security.auth.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.V1Yearly;

@Repository
public interface V1YearRepository extends JpaRepository<V1Yearly,Integer> {}
