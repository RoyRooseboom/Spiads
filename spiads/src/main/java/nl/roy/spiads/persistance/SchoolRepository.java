package nl.roy.spiads.persistance;

import nl.roy.spiads.domain.School;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;


@Component
public interface SchoolRepository extends CrudRepository<School, Long> {
    School findByUrl(String url);
}
