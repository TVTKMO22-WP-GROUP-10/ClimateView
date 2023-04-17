package com.security.auth.data.VisualV1;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="v1reconstruction")
public class V1Reconstruction {
    
    @Id
    private Integer year;

    private Double temp;

    public V1Reconstruction() {
    }

    public Integer getYear() {
        return this.year;
    }

    public Double getTemp() {
        return this.temp;
    }

}
