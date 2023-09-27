package com.ekhonni.backend.controller;

import com.ekhonni.backend.model.UserType;
import com.ekhonni.backend.model.Users;
import com.ekhonni.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Users user) {
        // Set the UserType from the request

        Users registeredUser = userService.registerUser(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Users> loginUser(@RequestBody Users user) {
        Users _user = userService.loginUser(user.getEmail(),user.getPassword());
        if (_user != null) {
            return new ResponseEntity<>(_user, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}