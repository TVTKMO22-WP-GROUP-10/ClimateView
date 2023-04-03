package com.security.auth.repo.VisualV3Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.security.auth.data.VisualV3.V3temp;

import java.util.List;

public interface V3TempRepo extends JpaRepository<V3temp, Long> {
    @Query(value = "SELECT * FROM v3temp",nativeQuery = true)
    List<V3temp> getTempData();
}
