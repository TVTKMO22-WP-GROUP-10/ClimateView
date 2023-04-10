package com.security.auth.data.VisualV5;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class V5Data {

    @Id
    private String sector;

    private Double percent;
    
    private String identifier;
    
    public String getSector() {
        return this.sector;
    }

    public Double getPercent() {
        return this.percent;
    }

    public String getIdentifier() {
        return this.identifier;
    }

}
