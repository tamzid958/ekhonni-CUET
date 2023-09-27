package com.ekhonni.backend.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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

    @Enumerated(EnumType.STRING) // Use EnumType.STRING to store enum values as strings in the database
    @Column(name = "user_type")
    private UserType userType;

    @Column(name = "nid")
    private String nid;

    @Column(name = "address")
    private String address;
}
