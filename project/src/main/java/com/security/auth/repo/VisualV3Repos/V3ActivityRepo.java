package com.security.auth.repo.VisualV3Repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.VisualV3.V3activities;

@Repository
public interface V3ActivityRepo extends JpaRepository<V3activities, Long> {
    @Query(value = "select * from v3activities", nativeQuery = true)
    List<V3activities> getActivityData();
}
