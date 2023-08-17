package preproject.spring.question.mapper;

import org.mapstruct.Mapper;
import preproject.spring.question.dto.QuestionPostDto;
import preproject.spring.question.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper  {

    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
//    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

}
