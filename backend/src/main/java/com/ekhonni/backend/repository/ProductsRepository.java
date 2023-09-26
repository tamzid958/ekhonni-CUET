package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Long>{
}
