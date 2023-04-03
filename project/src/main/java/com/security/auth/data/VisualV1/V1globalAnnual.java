package com.security.auth.data.VisualV1;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v1global_annual")
public class V1globalAnnual {

    @Id
    private int year;
    private double deg;

    public int getYear() {
        return this.year;
    }

    public double getDeg() {
        return this.deg;
    }
}
