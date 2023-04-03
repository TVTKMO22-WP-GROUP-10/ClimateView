package com.security.auth.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.User;

@Repository
public interface PersonRepository extends JpaRepository<User,String>{

}
