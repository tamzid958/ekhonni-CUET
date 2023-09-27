package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
