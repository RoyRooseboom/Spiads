package nl.roy.spiads.persistance;

import nl.roy.spiads.domain.Inschrijven;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface AdministratieRepository extends CrudRepository<Inschrijven, Long> {
}
