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

    @Column(nullable = false, unique = true)
    private String url;

    @OneToMany(mappedBy = "school")
    private List<Lid> leden;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSchoolNaam() {
        return schoolNaam;
    }

    public void setSchoolNaam(String schoolNaam) {
        this.schoolNaam = schoolNaam;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<Lid> getLeden() {
        return leden;
    }

    public void setLeden(List<Lid> leden) {
        this.leden = leden;
    }
}
