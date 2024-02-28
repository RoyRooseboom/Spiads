package nl.roy.spiads.persistance;


import nl.roy.spiads.domain.Lid;
import org.springframework.stereotype.Component;
import org.springframework.data.repository.CrudRepository;

@Component
public interface InschrijvenRepository extends CrudRepository<Lid, Long>{
}
