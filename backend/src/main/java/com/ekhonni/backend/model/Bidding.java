package com.ekhonni.backend.model;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Setter
@Getter
@RequiredArgsConstructor
@Entity
@Table(name = "bidding")
public class Bidding extends BaseEntity<Long>{
    @Column(name = "buyer_id")
    private Long buyerId;

    @Column(name = "bid_price")
    private Double bidPrice;

    @Column(name = "product_id")
    private Long productId;
}
