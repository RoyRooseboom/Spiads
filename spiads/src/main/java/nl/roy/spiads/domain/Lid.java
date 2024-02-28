package nl.roy.spiads.domain;


import jakarta.persistence.*;

@Entity
public class Lid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column()
    private String naam;
    @Column()
    private String achternaam;
    @Column()
    private String email;
    @Column()
    private String adress;
    @Column()
    private String postcode;
    @Column()
    private String woonplaats;
    @Column()
    private String iban;
    @Column(columnDefinition="TEXT")
    private String handtekening;


    public void setId(long id) {
        this.id = id;
    }

    public long getId() { return id; }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getAchternaam() {
        return achternaam;
    }

    public void setAchternaam(String achternaam) {
        this.achternaam = achternaam;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdress() { return adress; }

    public void setAdress(String adress) { this.adress = adress; }

    public String getPostcode() { return postcode; }

    public void setPostcode(String postcode) { this.postcode = postcode; }

    public String getWoonplaats() { return woonplaats; }

    public void setWoonplaats(String woonplaats) { this.woonplaats = woonplaats; }

    public String getIban() { return iban; }

    public void setIban(String iban) { this.iban = iban; }

    public String getHandtekening() { return handtekening; }

    public void setHandtekening(String handtekening) { this.handtekening = handtekening; }
}
