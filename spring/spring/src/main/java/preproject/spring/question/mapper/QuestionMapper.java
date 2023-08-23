package preproject.spring.question.mapper;

import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import preproject.spring.User.entity.User;
import preproject.spring.User.service.UserService;
import preproject.spring.question.dto.*;
import preproject.spring.question.entity.Question;
import preproject.spring.question.entity.QuestionTag;
import preproject.spring.tag.entity.Tag;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper  {
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
    List<QuestionResponseDto> questionToQuestionResponseDtos(List<Question> questions);
    QuestionResponseDto questionToQuestionResponseDto(Question question);

    QuestionTagDto questionTagToQuestionTagResponseDto(QuestionTag questionTag);
    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto){
        Question question = new Question();
        User user = new User();

        user.setUserId(questionPostDto.getUserId());
        question.setUser(user);
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());

        List<QuestionTag> questionTags = questionPostDto.getQuestionTags().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagTitle(questionTagDto.getTagTitle());
                    questionTag.setQuestion(question);
                    questionTag.setTag(tag);
                    return questionTag;
                }).collect(Collectors.toList());

        question.setQuestionTags(questionTags);


        return question;
    }

    default List<QuestionTagResponseDto> questionTagsToQuestionTagResponseDtos(List<QuestionTag> questionTags){
        return questionTags
                .stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
//                        .tagId(questionTag.getTag().getTagId())
                        .tagTitle(questionTag.getTag().getTagTitle())
                        .build())
                .collect(Collectors.toList());
    }
}


