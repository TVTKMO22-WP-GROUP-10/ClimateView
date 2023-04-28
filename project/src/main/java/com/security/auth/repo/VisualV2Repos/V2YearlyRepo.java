package com.security.auth.repo.VisualV2Repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.VisualV2.V2Yearly;

@Repository
public interface V2YearlyRepo extends JpaRepository<V2Yearly, Integer>{
    @Query(value = "select * from v2icecore1", nativeQuery = true)
    List<V2Yearly> getV2Icecore1();

    @Query(value = "select * from v2icecore2", nativeQuery = true)
    List<V2Yearly> getV2Icecore2();

    @Query(value = "select * from v2icecore3", nativeQuery = true)
    List<V2Yearly> getV2Icecore3();

    @Query(value = "select * from v2maunaloa_annual", nativeQuery = true)
    List<V2Yearly> getV2MaunaloaAnnual();
}
