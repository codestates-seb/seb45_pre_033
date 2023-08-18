package preproject.spring.comment.Entity;

import lombok.*;
import preproject.spring.User.entity.User;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.comment.dto.CommentReqDto;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "answer_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Answer answer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private String content;

    @Builder(builderMethodName = "createComment")
    public Comment(Answer answer, User user, String content) {
        this.answer = answer;
        this.user = user;
        this.content = content;
    }

    public void updateComment(CommentReqDto commentReqDto) {
        if (commentReqDto.getContent() != null) {
            this.content = commentReqDto.getContent();
        }
    }
}