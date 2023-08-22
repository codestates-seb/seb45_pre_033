package preproject.spring.answer.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.question.entity.Question;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findByQuestion(Question question);

    Answer findByAnswerId(Long answerId);

    @Query("select a from Answer a left join fetch a.comment where a.answerId = :answerId")
    Optional<Answer> findByAnswerIdWithComment(Long answerId);
}
