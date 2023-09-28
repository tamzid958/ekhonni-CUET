package com.ekhonni.backend.model;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Setter
@Getter
@RequiredArgsConstructor
@Entity
@Table(name = "bidding")
public class Bidding extends BaseEntity<Long>{
    @ManyToOne
    private User buyer;

    @Column(name = "bid_price")
    private Double bidPrice;

    @ManyToOne
    private Product product;
}
