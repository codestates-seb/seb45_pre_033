package preproject.spring.question.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionPatchDto {
    private Long questionId;
    private String title;
    private String content;
}
