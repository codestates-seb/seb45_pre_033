package preproject.spring.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.answer.dto.AnswerQResDto;
import preproject.spring.answer.dto.AnswerResDto;
import preproject.spring.question.entity.QuestionTag;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String content;
    private String writer;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private List<AnswerQResDto> answers;
    private List<QuestionTag> questionTags;
}
