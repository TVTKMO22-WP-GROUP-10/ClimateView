package com.security.auth.data;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="site_users")
public class Site_users {
    @Id
    public String username;
    public String password;
    
    public Site_users() {
    }

    public Site_users(String username, String pw) {
        this.username = username;
        this.password = pw;
    }

}
 

