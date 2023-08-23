package preproject.spring.question.mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.question.dto.QuestionPatchDto;
import preproject.spring.question.dto.QuestionResponseDto;
import preproject.spring.question.dto.QuestionTagDto;
import preproject.spring.question.entity.Question;
import preproject.spring.question.entity.QuestionTag;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-17T15:16:37+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.questionId( questionPatchDto.getQuestionId() );
        question.title( questionPatchDto.getTitle() );
        question.content( questionPatchDto.getContent() );

        return question.build();
    }

    @Override
    public List<QuestionResponseDto> questionToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        Long questionId = null;
        String title = null;
        String content = null;
        String writer = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;
        List<Answer> answers = null;
        List<QuestionTag> questionTags = null;

        questionId = question.getQuestionId();
        title = question.getTitle();
        content = question.getContent();
        writer = question.getWriter();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();
        List<Answer> list = question.getAnswers();
        if ( list != null ) {
            answers = new ArrayList<Answer>( list );
        }
        List<QuestionTag> list1 = question.getQuestionTags();
        if ( list1 != null ) {
            questionTags = new ArrayList<QuestionTag>( list1 );
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto( questionId, title, content, writer, createdAt, modifiedAt, answers, questionTags );

        return questionResponseDto;
    }

    @Override
    public QuestionTagDto questionTagToQuestionTagResponseDto(QuestionTag questionTag) {
        if ( questionTag == null ) {
            return null;
        }

        QuestionTagDto questionTagDto = new QuestionTagDto();

        return questionTagDto;
    }
}
