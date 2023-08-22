package preproject.spring.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.spring.tag.entity.Tag;

public interface TagRepository extends JpaRepository<Tag, String> {
    Tag findByTagTitle(String tagTitle);
}
