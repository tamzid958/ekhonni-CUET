package com.ekhonni.backend.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import org.hibernate.id.enhanced.SequenceStyleGenerator;

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
    @GenericGenerator(
            name = "sequence_gen",
            strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
            parameters = {
                    @Parameter(
                            name = SequenceStyleGenerator.CONFIG_PREFER_SEQUENCE_PER_ENTITY,
                            value = "true"
                    ),
                    @Parameter(name = "initial_value", value = "1"),
                    @Parameter(name = "increment_size", value = "1")
            }
    )
    @GeneratedValue(generator = "sequence_gen")
    private PK id;
}
