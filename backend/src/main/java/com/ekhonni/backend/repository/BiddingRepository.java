package com.ekhonni.backend.repository;

import com.ekhonni.backend.model.Bidding;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BiddingRepository extends CrudRepository<Bidding, Long> {
}
