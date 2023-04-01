package com.security.auth.data;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;


@Entity
@Table(name="v1Year")
@IdClass(V1Yearly.class)
public class V1Yearly implements Serializable {

    @Id
    private int year;

    @Id
    private String area;

    private double deg;

    public int getYear() {
        return this.year;
    }

    public double getDeg() {
        return this.deg;
    }

    public String getArea() {
        return this.area;
    }

}