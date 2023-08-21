package preproject.spring.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.spring.question.entity.QuestionTag;
import preproject.spring.tag.entity.Tag;

public interface QuestionTagRepository extends JpaRepository<QuestionTag,Long> {
    QuestionTag findQuestionTagByTagTagTitle(String tagTitle);
}
