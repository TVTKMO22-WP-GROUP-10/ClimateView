package com.security.auth.data.VisualV2;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class V2Yearly {
    
    @Id
    private int year;
    private double co2ppm;

    public V2Yearly() {}
    public V2Yearly(int year, double co2ppm) {
        this.year = year;
        this.co2ppm = co2ppm;
    }

    public int getYear() {
        return year;
    }
    public double getCo2ppm() {
        return co2ppm;
    }
    
}
