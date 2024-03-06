package nl.roy.spiads.rest;

import nl.roy.spiads.domain.Lid;
import nl.roy.spiads.persistance.InschrijvenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class InschrijvenEndPoint {

    @Autowired
    InschrijvenService inschrijvenService;

    @CrossOrigin
    @PostMapping("inschrijven/add")
    public void addInschrijven(@RequestBody Lid lid) {
        inschrijvenService.addInschrijven(lid);
    }


}
