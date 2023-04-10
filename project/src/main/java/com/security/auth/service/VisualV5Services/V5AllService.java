package com.security.auth.service.VisualV5Services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.security.auth.data.VisualV5.V5Data;
import com.security.auth.repo.VisualV5Repos.V5AllRepository;

@Service
public class V5AllService {
    
    @Autowired
    V5AllRepository V5allrepo;

    public List<V5Data> getV5Data(){
        return V5allrepo.findAll();
    }

}
