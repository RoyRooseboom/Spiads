package nl.roy.spiads.domain;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true)
    private String schoolNaam;

    @Column(unique = true)
    private String url;

    @OneToMany(mappedBy = "school")
    private List<Lid> leden;

}
