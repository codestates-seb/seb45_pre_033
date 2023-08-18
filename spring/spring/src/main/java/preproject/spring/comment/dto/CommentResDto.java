package preproject.spring.comment.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class CommentResDto {

    private Long comment_id;
    private Long answer_id;
    private Long user_id;
    private String content;
    private LocalDateTime createdAt;

    @Builder(builderMethodName = "createCommentResDto")
    public CommentResDto(Long comment_id, Long answer_id, Long user_id, String content, LocalDateTime createdAt) {
        this.comment_id = comment_id;
        this.answer_id = answer_id;
        this.user_id = user_id;
        this.content = content;
        this.createdAt = createdAt;
    }
}