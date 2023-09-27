package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
