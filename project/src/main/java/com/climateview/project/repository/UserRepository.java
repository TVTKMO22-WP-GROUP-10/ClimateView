package com.climateview.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.climateview.project.data.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    @Query("select u from User  u where u.username=?1")
    List<User> findByUsername(String username);
}
