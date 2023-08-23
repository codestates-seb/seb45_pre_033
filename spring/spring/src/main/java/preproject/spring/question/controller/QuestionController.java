package preproject.spring.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import preproject.spring.question.dto.QuestionPatchDto;
import preproject.spring.question.dto.QuestionPostDto;
import preproject.spring.question.dto.QuestionResponseDto;
import preproject.spring.question.entity.Question;
import preproject.spring.question.mapper.QuestionMapper;
import preproject.spring.question.service.QuestionService;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/question")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/question";
    private QuestionService questionService;
    private QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping("/registration")
    public ResponseEntity<Question> postQuestion(@RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(QUESTION_DEFAULT_URL + "/{question-id}")
                        .buildAndExpand(question.getQuestionId())
                        .toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{question-id}")
    public ResponseEntity<QuestionResponseDto> getQuestion(@PathVariable("question-id") Long questionId){
        QuestionResponseDto question = mapper.questionToQuestionResponseDto(questionService.findQuestion(questionId));

        return ResponseEntity.ok(question);
    }

    @GetMapping
    public ResponseEntity<List<QuestionResponseDto>> getQuestions(@RequestParam int page,
                                                       @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);

        List<Question> questions = pageQuestions.getContent();
        List<QuestionResponseDto> response = mapper.questionToQuestionResponseDtos(questions);
        return ResponseEntity.ok(response);
    }

    @PatchMapping("/edit/{question-id}")
    public ResponseEntity<QuestionResponseDto> patchQuestion(@PathVariable("question-id") Long questionId,
                                        @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question =
                questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));

        return ResponseEntity.ok(mapper.questionToQuestionResponseDto(question));
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") Long questionId){
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
