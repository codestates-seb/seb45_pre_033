package preproject.spring.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.spring.question.entity.Question;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
