package com.security.auth.rest.VisualV5Rest;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.VisualV5.V5Data;
import com.security.auth.service.VisualV5Services.V5AllService;

@RestController
public class V5AllRest {
    
    @Autowired
    V5AllService v5AllService;

    @CrossOrigin
    @GetMapping("/v5data")
    public List<V5Data> getV5Data(){
        return v5AllService.getV5Data();
    }
}
