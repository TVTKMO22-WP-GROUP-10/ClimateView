package com.security.auth.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class site_users {
    @Id
    public String username;
    public String password;
    
    public site_users() {
    }

    public site_users(String username, String pw) {
        this.username = username;
        this.password = pw;
    }

}
 

