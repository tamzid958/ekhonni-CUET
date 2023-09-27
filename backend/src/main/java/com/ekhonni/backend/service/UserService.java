package com.ekhonni.backend.service;

import com.ekhonni.backend.model.Users;

public interface UserService {
    Users registerUser(Users user);
    Users loginUser(String email,String password);
}
