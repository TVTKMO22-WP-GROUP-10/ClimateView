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

    public List<V4Data> getV4Finland(){
        return v4Repo.getV4Finland();
    }

    public List<V4Data> getV4Russia(){
        return v4Repo.getV4Russia();
    }

    public List<V4Data> getV4China(){
        return v4Repo.getV4China();
    }

    public List<V4Data> getV4Usa(){
        return v4Repo.getV4Usa();
    }
}
