package preproject.spring.question.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
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

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {
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
    public ResponseEntity getQuestion(@PathVariable("question-id") Long questionId){
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                mapper.questionToQuestionResponseDto(question),HttpStatus.OK
        );
    }

    @GetMapping
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.findQuestions();

        List<QuestionResponseDto> response =
                questions
                        .stream()
                        .map(question -> mapper.questionToQuestionResponseDto(question))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
