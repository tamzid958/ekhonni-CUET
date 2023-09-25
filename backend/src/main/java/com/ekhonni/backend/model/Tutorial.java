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
@Table(name = "tutorials")
public class Tutorial extends BaseEntity<Long> {
    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "published")
    private Boolean published;
}
