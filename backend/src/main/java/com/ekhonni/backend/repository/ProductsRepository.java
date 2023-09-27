package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.Products;
import org.springframework.data.repository.CrudRepository;

public interface ProductsRepository extends CrudRepository<Products, Long> {
}
