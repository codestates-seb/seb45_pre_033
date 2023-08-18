package preproject.spring.question.dto;

import lombok.Getter;


import java.util.List;

@Getter
public class QuestionPostDto {
    private Long userId;
    private String title;
    private String content;
    private List<QuestionTagDto> questionTags;
}
