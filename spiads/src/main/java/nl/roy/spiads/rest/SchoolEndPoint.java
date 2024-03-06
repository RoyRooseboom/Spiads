package nl.roy.spiads.rest;

import nl.roy.spiads.persistance.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class SchoolEndPoint {

    @Autowired
    SchoolService schoolService;

    @CrossOrigin
    @GetMapping(value = "school/getUrl/{url}", produces = "text/plain")
    public String getUrlVanSchool(@PathVariable("url") String url) {
        return schoolService.getUrlVanSchool(url);
    }
}
