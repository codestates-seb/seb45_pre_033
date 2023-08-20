package preproject.spring.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class CommentQResDto {

    private Long commentId;
    private String content;
    private LocalDateTime createdAt;
}
