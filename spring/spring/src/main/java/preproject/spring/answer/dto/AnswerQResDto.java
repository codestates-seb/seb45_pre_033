package preproject.spring.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.spring.comment.dto.CommentQResDto;
import preproject.spring.comment.dto.CommentResDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerQResDto {

    private Long answerId;
    private String content;
    private LocalDateTime createdAt;
    private List<CommentQResDto> comment;
}
