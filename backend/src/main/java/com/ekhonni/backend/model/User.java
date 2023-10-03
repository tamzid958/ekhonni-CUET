package com.ekhonni.backend.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User extends BaseEntity<Long> implements Serializable {
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
