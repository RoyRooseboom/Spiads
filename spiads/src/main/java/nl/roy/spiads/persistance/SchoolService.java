package nl.roy.spiads.persistance;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SchoolService {

    @Autowired
    SchoolRepository schoolRepository;

    public String getUrlVanSchool(String url) {
        System.out.println(schoolRepository.findByUrl(url).getUrl());

        try {
            return schoolRepository.findByUrl(url).getUrl();
        } catch(NullPointerException e) {
            return e.toString();
        }

    }
}
