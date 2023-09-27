package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.Users;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<Users, Long> {
    Users findByEmail(String email);
}
