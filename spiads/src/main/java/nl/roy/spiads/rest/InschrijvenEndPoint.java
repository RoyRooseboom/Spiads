package nl.roy.spiads.rest;

import nl.roy.spiads.domain.Inschrijven;
import nl.roy.spiads.persistance.InschrijvenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class InschrijvenEndPoint {

    @Autowired
    InschrijvenService inschrijvenService;

    @CrossOrigin
    @PostMapping("inschrijven/add")
    public void addInschrijven(@RequestBody Inschrijven inschrijven) {
        inschrijvenService.addInschrijven(inschrijven);
    }
}
