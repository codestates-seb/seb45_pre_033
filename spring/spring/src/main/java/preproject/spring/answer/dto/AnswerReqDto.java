package preproject.spring.answer.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import preproject.spring.User.entity.User;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.question.entity.Question;

@Getter
@Setter
@ToString
public class AnswerReqDto {

    private String content;
    private Long answerId;
    private Long questionId;
    private Long userId;

    public Answer createAnswer() {
        Question question = new Question();
        question.setQuestionId(this.questionId);

        User user = new User();
        user.setUserId(this.userId);

        return Answer.createAnswer()
                .question(question)
                .user(user)
                .content(this.content)
                .build();
    }
}
