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
@Table(name = "users")
public class Users extends BaseEntity<Long> {
    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "user_type")
    private String userType;

    @Column(name = "nid")
    private String nid;

    @Column(name = "address")
    private String address;
}
