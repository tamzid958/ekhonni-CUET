package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.Bidding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BiddingRepository extends JpaRepository<Bidding, Long>{
}
