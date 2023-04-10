package com.security.auth.rest.VisualV3V4Rest;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.VisualV3.V3activities;
import com.security.auth.data.VisualV3.V3co2;
import com.security.auth.data.VisualV3.V3temp;
import com.security.auth.data.VisualV4.V4Data;
import com.security.auth.service.VisualV3services.V3ActivityService;
import com.security.auth.service.VisualV3services.V3Co2Service;
import com.security.auth.service.VisualV3services.V3TempService;
import com.security.auth.service.VisualV4Services.V4Service;

@CrossOrigin
@RestController
public class V3V4AllRest {
    @Autowired
    V3Co2Service co2Service;

    @Autowired
    V3TempService tempService;

    @Autowired
    V3ActivityService activityService;

    @Autowired
    V4Service v4service;

    @GetMapping("/temp")
    public List<V3temp> getTempData(){
        return tempService.getTempData();
    }

    @GetMapping("/activities")
    public List<V3activities> getActivityData(){
        return activityService.getActivityData();
    }
    
    @GetMapping("/co2")
    public List<V3co2> getCo2Data(){
        return co2Service.getCo2Data();
    }

    //v4
    @GetMapping("/emission")
    public List<V4Data> getV4Data(){
        return v4service.getV4Data();
    }

    
}
