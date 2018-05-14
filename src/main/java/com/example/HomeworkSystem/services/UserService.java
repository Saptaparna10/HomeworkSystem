package com.example.HomeworkSystem.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HomeworkSystem.repositories.UserRepository;

import com.example.HomeworkSystem.models.User;

import javax.servlet.http.HttpSession;

@RestController
public class UserService {
    @Autowired
    UserRepository repository;

    @PostMapping("/api/user")
    public User createUser(@RequestBody User user) {
        return repository.save(user);
    }

    @GetMapping("/api/user")
    public List<User> findAllUsers() {
        return (List<User>) repository.findAll();
    }

    @DeleteMapping("/api/user/{userId}")
    public void deleteUser(@PathVariable("userId") int id) {
        repository.deleteById(id);
    }


    @PutMapping("/api/user/{userId}")
    public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
        Optional<User> data = repository.findById(userId);
        if(data.isPresent()) {
            User user = data.get();
            user.setUsername(newUser.getUsername());
            user.setFirstName(newUser.getFirstName());
            user.setLasteName(newUser.getLastName());
            user.setPassword(newUser.getPassword());
            repository.save(user);
            return user;
        }
        return null;
    }

    @GetMapping("/api/user/{userId}")
    public User findUserById(@PathVariable("userId") int userId) {
        Optional<User> data = repository.findById(userId);
        if(data.isPresent()) {
            return data.get();
        }
        return null;
    }

    //register() & findUserByUsername()
    @PostMapping("/api/register")
    public User register(@RequestBody User user, HttpSession session) {
        return null;
    }

}