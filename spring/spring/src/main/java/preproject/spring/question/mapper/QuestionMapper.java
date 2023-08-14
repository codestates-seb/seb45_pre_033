package preproject.spring.question.mapper;

import org.mapstruct.Mapper;
import preproject.spring.question.dto.QuestionPostDto;
import preproject.spring.question.dto.QuestionResponseDto;
import preproject.spring.question.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper  {

    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
//    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
//    QuestionResponseDto questionToQuestionResponseDto(Question question);

    default QuestionResponseDto questionToQuestionResponseDto(Question question){

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setWriter("question.getUser().getNickname()");
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());

        return questionResponseDto;
    }
}
