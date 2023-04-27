package com.security.auth.repo.VisualV2Repos;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.security.auth.data.VisualV2.V2Monthly;

public interface V2MauMonthlyRepo extends JpaRepository<V2Monthly, Integer>{

    @Query(value = "select * from v2maunaloa_monthly", nativeQuery = true)
    List<V2Monthly> getV2MaunaloaMonthly();
    
}
