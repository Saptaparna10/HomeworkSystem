package com.example.HomeworkSystem.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.HomeworkSystem.models.User;

public interface UserRepository
        extends CrudRepository<User, Integer>{
    //findUserByUsername()
}