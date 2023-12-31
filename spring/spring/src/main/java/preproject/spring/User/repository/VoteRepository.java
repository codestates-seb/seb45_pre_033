package preproject.spring.User.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import preproject.spring.User.entity.User;
import preproject.spring.User.entity.Vote;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.question.entity.Question;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote,Long> {
    Optional<Vote> findByAnswerAndUser(Answer answer, User user);
}
