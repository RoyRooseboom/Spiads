package nl.roy.spiads.persistance;

import nl.roy.spiads.domain.Lid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministratieService {

    @Autowired
    AdministratieRepository administratieRepository;

    public Iterable<Lid> getAllLeden() { return administratieRepository.findAll(); }
}
