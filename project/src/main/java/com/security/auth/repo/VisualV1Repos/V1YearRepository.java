package com.security.auth.repo.VisualV1Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.VisualV1.V1Yearly;

@Repository
public interface V1YearRepository extends JpaRepository<V1Yearly,Integer> {}
