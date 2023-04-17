package com.security.auth.service.VisualV2Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.data.VisualV2.V2Yearly;
import com.security.auth.data.VisualV2.V2Monthly;
import com.security.auth.repo.VisualV2Repos.V2MauMonthlyRepo;
import com.security.auth.repo.VisualV2Repos.V2YearlyRepo;

@Service
public class V2Service {
    @Autowired
    V2YearlyRepo v2yrepo;
    @Autowired
    V2MauMonthlyRepo v2mrepo;


    public List<V2Yearly> getV2icecore1() {
        return v2yrepo.getV2Icecore1();
    }

    public List<V2Yearly> getV2icecore2() {
        return v2yrepo.getV2Icecore2();
    }

    public List<V2Yearly> getV2icecore3() {
        return v2yrepo.getV2Icecore3();
    }

    public List<V2Yearly> getV2MaunaloaAnnual(){
        return v2yrepo.getV2MaunaloaAnnual();
    }

    public List<V2Monthly> getV2MaunaloaMonthly(){
        return v2mrepo.getV2MaunaloaMonthly();
    }
}
