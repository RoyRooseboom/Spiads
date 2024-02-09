package nl.roy.spiads.persistance;


import nl.roy.spiads.domain.Inschrijven;
import org.springframework.stereotype.Component;
import org.springframework.data.repository.CrudRepository;

@Component
public interface InschrijvenRepository extends CrudRepository<Inschrijven, Long>{
}
