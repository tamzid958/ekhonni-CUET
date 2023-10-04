package com.ekhonni.backend.model;


import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Setter
@Getter
@RequiredArgsConstructor
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bidding")
public class Bidding extends BaseEntity<Long> implements Serializable {
    @ManyToOne @JoinColumn
    @NotNull
    private User buyer;

    @Column(name = "bid_price")
    private Double bidPrice;

    @ManyToOne @JoinColumn(name = "product")
    @NotNull
    private Product product;

    @Column(name = "status")
    private String status;

}
