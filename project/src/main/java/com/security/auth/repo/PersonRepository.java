package com.security.auth.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Site_users;

@Repository
public interface PersonRepository extends JpaRepository<Site_users,String>{

}
