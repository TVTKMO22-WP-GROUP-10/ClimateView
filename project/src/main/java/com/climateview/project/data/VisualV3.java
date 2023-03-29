package com.climateview.project.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "v3all")
public class VisualV3 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int timeGast;
    private double temp;
    private double ppm;
    private int timeCo2;
    private String activities;
    private int year;

    //getters, setters
    public Long getId() {
        return this.id;
    }

    public int getTimeGast() {
        return this.timeGast;
    }

    public void setTimeGast(int timeGast) {
        this.timeGast = timeGast;
    }

    public double getTemp() {
        return this.temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public double getPpm() {
        return this.ppm;
    }

    public void setPpm(double ppm) {
        this.ppm = ppm;
    }

    public int getTimeCo2() {
        return this.timeCo2;
    }

    public void setTimeCo2(int timeCo2) {
        this.timeCo2 = timeCo2;
    }

    public String getActivities() {
        return this.activities;
    }

    public void setActivities(String activities) {
        this.activities = activities;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

}
