package com.security.auth.data.VisualV1;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name="v1Monthly")
@IdClass(V1Monthly.class)
public class V1Monthly implements Serializable {

    @Id
    private int year;

    @Id
    private int month;

    @Id
    private String area;

    private double deg;

    public double getYear() {
        return this.year;
    }

    public double getDeg() {
        return this.deg;
    }

    public int getMonth() {
        return this.month;
    }

    public String getArea() {
        return area;
    }

}