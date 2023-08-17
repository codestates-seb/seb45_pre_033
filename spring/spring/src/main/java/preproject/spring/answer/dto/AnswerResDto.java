package preproject.spring.answer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.spring.comment.dto.CommentResDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class AnswerResDto {

    private Long answerId;
    private Long questionId;
    private String content;
    private Long userId;
    private LocalDateTime createdAt;
    private List<CommentResDto> comment;

}
