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
    private String email;
    private String image_url;
    private String writer;

    public Answer createAnswer() {
        Question question = new Question();
        question.setQuestionId(this.questionId);

        User user = new User();
        user.setUserId(this.userId);
        user.setEmail(this.email);
        user.setImage_url(this.image_url);
        user.setNickname(this.writer);

        return Answer.createAnswer()
                .question(question)
                .user(user)
                .content(this.content)
                .build();
    }
}
