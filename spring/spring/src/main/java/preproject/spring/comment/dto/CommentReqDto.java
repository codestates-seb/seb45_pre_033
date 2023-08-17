package preproject.spring.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.spring.User.entity.User;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.comment.Entity.Comment;

@Getter
@Setter
@NoArgsConstructor
public class CommentReqDto {

    private String content;
    private Long answerId;
    private Long userId;

    public Comment createComment() {
        Answer answer = new Answer();
        answer.setAnswerId(this.answerId);

        User user = new User();
        user.setUserId(this.userId);

        return Comment.createComment()
                .answer(answer)
                .user(user)
                .content(this.content)
                .build();
    }
}