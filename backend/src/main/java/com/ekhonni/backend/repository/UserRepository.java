package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin
public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);

}
