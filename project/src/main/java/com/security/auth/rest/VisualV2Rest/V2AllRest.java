package com.security.auth.rest.VisualV2Rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.VisualV2.V2Monthly;
import com.security.auth.data.VisualV2.V2Yearly;
import com.security.auth.service.VisualV2Services.V2Service;

@CrossOrigin
@RestController
public class V2AllRest {
    
    @Autowired
    V2Service v2serv;

    @GetMapping("v2icecore1")
    public List<V2Yearly> getV2icecore1() {
        return v2serv.getV2icecore1();
    }
    @GetMapping("/v2icecore2")
    public List<V2Yearly> getV2icecore2() {
        return v2serv.getV2icecore2();
    }
    @GetMapping("/v2icecore3")
    public List<V2Yearly> getV2icecore3() {
        return v2serv.getV2icecore3();
    }
    @GetMapping("/v2maunaloaAnnual")
    public List<V2Yearly> getV2MaunaloaAnnual() {
        return v2serv.getV2MaunaloaAnnual();
    }
    @GetMapping("/v2maunaloaMonthly")
    public List<V2Monthly> getV2MaunaloaMonthly(){
        return v2serv.getV2MaunaloaMonthly();
    }
}
