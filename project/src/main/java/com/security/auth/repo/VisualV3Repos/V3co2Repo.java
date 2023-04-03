package com.security.auth.repo.VisualV3Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.VisualV3.V3co2;

import java.util.List;

@Repository
public interface V3co2Repo extends JpaRepository<V3co2,Long>{
    @Query(value = "select * from v3co2", nativeQuery = true)
    List<V3co2> getCo2Data();
}
