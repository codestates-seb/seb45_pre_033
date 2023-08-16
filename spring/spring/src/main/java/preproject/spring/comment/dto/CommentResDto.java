package preproject.spring.comment.dto;

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
    private String user_id;
    private String content;
    private LocalDateTime createdAt = LocalDateTime.now();

}