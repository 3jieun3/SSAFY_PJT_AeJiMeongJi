package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "dog")
public class Dog extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private LocalDate birthdate;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Boolean neutering;

    private Boolean gone;

    private LocalDate adoptedDay;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "image_id")
    private DogImage image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "breed_id")
    private Breed breed;

    public Dog(String name, LocalDate birthdate, Gender gender, Boolean neutering, Boolean gone, LocalDate adoptedDay, Member member, DogImage image, Breed breed) {
        this.name = name;
        this.birthdate = birthdate;
        this.gender = gender;
        this.neutering = neutering;
        this.gone = gone;
        this.adoptedDay = adoptedDay;
        this.member = member;
        this.image = image;
        this.breed = breed;
    }
}