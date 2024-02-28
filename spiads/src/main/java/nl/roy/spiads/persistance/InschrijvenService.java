package nl.roy.spiads.persistance;

import nl.roy.spiads.domain.Lid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InschrijvenService {
    @Autowired
    InschrijvenRepository inschrijvenRepository;

    public void addInschrijven(Lid lid) { inschrijvenRepository.save(lid); }
}
