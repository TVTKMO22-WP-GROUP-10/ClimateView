package com.security.auth.rest.VisualV1Rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.VisualV1.V1Monthly;
import com.security.auth.data.VisualV1.V1Yearly;
import com.security.auth.service.VisualV1Services.V1AllService;

@CrossOrigin  //Allowing CORS
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