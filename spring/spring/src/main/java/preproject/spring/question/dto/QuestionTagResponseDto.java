package preproject.spring.question.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class QuestionTagResponseDto {
    private Long tagId;
    private String tagTitle;
}
