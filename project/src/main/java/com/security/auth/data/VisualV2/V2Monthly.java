package com.security.auth.data.VisualV2;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class V2Monthly {

    @Id
    private int id;
    private int year;
    private int month;
    private int co2ppm;

    public V2Monthly() {}
    public V2Monthly(int id, int year, int month, int co2ppm) {
        this.id = id;
        this.year = year;
        this.month = month;
        this.co2ppm = co2ppm;
    }
    
    public int getId() {
        return id;
    }
    public int getYear() {
        return year;
    }
    public int getMonth() {
        return month;
    }
    public int getCo2ppm() {
        return co2ppm;
    }


    

    
}
