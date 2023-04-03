package com.security.auth.rest.VisualV1Rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.VisualV1.V1globalAnnual;
import com.security.auth.service.VisualV1Services.V1globalAnnualService;

@RestController
public class V1globalAnnualRest {

    @Autowired 
    V1globalAnnualService v1service;
    
    @GetMapping("/v1globalAnnual")
    public List<V1globalAnnual> getData(){
        return v1service.getv1data();
    }
    
}
