package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ProductRepository extends CrudRepository<Product, Long> {

    List<Product> findAllByNameContains(String name);
}
