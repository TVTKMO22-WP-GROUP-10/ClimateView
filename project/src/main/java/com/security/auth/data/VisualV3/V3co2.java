package com.security.auth.data.VisualV3;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class V3co2 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private int timeCo2;
    private double ppm;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTimeCo2() {
        return this.timeCo2;
    }

    public void setTimeCo2(int timeCo2) {
        this.timeCo2 = timeCo2;
    }

    public double getPpm() {
        return this.ppm;
    }

    public void setPpm(double ppm) {
        this.ppm = ppm;
    }


    

}