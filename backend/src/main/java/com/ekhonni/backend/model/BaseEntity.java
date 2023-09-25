package com.ekhonni.backend.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@Setter
@Getter
@RequiredArgsConstructor
@MappedSuperclass
public abstract class BaseEntity<PK extends Serializable> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private PK id;
}
