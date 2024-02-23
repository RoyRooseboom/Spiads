package nl.roy.spiads.rest;

import nl.roy.spiads.domain.Inschrijven;
import nl.roy.spiads.persistance.AdministratieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdministratieEndPoint {

    @Autowired
    AdministratieService administratieService;

    @CrossOrigin
    @GetMapping("administratie/get")
    public Iterable<Inschrijven> getAllLeden() {
        return administratieService.getAllLeden();
    }
}
