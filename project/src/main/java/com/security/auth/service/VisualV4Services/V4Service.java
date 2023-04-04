package com.security.auth.service.VisualV4Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.auth.repo.VisualV4Repos.V4Repo;
import com.security.auth.data.VisualV4.V4Data;

@Service
public class V4Service {
    @Autowired
    V4Repo v4Repo;

    public List<V4Data> getV4Data(){
        return v4Repo.getV4Data();
    }
}
