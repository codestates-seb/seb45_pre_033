package preproject.spring.questionTest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import preproject.spring.User.User;
import preproject.spring.question.entity.Question;

import static preproject.spring.User.User.Role.USER;

public class QuestionTest {
    @DisplayName("Question 생성")
    @Test
    void createQuestion() {
        Question question = Question.builder()
                .title("hello")
                .content("hello Spring")
                .build();

        Assertions.assertNotNull(question);

        Assertions.assertEquals("hello",question.getTitle());
        Assertions.assertEquals("hello Spring",question.getContent());


    }
    @DisplayName("Question 조회")
    @Test
    void getQuestion() {
        User user = User.builder()
                .email("example@gmail.com")
                .password("example")
                .profile_message("hello")
                .imageurl("hi.png")
                .nickname("hong")
                .role(USER)
                .build();

        Question question = Question.builder()
                .title("hello")
                .content("hello Spring")
                .user(user)
                .build();



        Assertions.assertEquals("hong",question.getUser().getNickname());
    }
}
