package com.security.auth.repo.VisualV4Repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.VisualV4.V4Data;

@Repository
public interface V4Repo extends JpaRepository<V4Data,Long> {
    @Query(value = "select * from v4emission_transfers", nativeQuery = true)
    List<V4Data> getV4Data();

    @Query(value = "SELECT * from v4emission_transfers WHERE country = 'Canada'", nativeQuery = true)
    List<V4Data> getV4Canada();

    @Query(value = "SELECT * from v4emission_transfers WHERE country = 'Russian Federation'", nativeQuery = true)
    List<V4Data> getV4Russia();

    @Query(value = "SELECT * from v4emission_transfers WHERE country = 'China'", nativeQuery = true)
    List<V4Data> getV4China();

    @Query(value = "SELECT * from v4emission_transfers WHERE country = 'USA'", nativeQuery = true)
    List<V4Data> getV4Usa();
}
