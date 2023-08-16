package preproject.spring.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.comment.Entity.Comment;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByAnswer(Answer answer);
}
