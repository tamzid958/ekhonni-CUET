package com.ekhonni.backend.service;

import com.ekhonni.backend.model.User;

public interface UserService {
    User registerUser(User user);
    User loginUser(String email,String password);
}
