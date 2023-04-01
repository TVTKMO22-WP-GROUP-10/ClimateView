package com.security.auth.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.V1Monthly;
import com.security.auth.data.V1Yearly;
import com.security.auth.service.V1AllService;

@RestController
public class V1AllRest {

    @Autowired 
    V1AllService v1AllService;
    
    @GetMapping("/v1year")
    public List<V1Yearly> getYearData(){
        return v1AllService.getV1Yearly();
    }
    
    @GetMapping("/v1monthly")
    public List<V1Monthly> getMonthlyData(){
        return v1AllService.getV1Monthly();
    }

}