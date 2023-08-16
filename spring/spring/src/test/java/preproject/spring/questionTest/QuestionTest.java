package preproject.spring.questionTest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import preproject.spring.question.entity.Question;

public class QuestionTest {
    @DisplayName("Question 생성")
    @Test
    void createQuestion() {
        Question question = Question.builder()
                .title("hello")
                .content("hello Spring")
                .writer("hong gil dong")
                .build();

        Assertions.assertNotNull(question);

        Assertions.assertEquals("hello",question.getTitle());
        Assertions.assertEquals("hello Spring",question.getContent());
        Assertions.assertEquals("hong gil dong",question.getWriter());


    }
}
