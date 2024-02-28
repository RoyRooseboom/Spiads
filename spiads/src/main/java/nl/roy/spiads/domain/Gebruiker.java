package nl.roy.spiads.domain;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Gebruiker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String wachtwoord;

    @Column(nullable = false)
    private String naam;

    @Column(nullable = false)
    private String achterNaam;

    @OneToMany
    private List<School> scholen;
}
