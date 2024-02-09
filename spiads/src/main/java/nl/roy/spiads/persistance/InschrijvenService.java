package nl.roy.spiads.persistance;

import nl.roy.spiads.domain.Inschrijven;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InschrijvenService {
    @Autowired
    InschrijvenRepository inschrijvenRepository;

    public void addInschrijven(Inschrijven inschrijven) { inschrijvenRepository.save(inschrijven); }
}
