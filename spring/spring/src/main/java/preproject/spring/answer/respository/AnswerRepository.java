package preproject.spring.answer.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.question.entity.Question;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findByQuestion(Question question);
}
