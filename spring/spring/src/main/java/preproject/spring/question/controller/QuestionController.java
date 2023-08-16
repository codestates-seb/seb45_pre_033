package preproject.spring.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
//import preproject.spring.question.dto.QuestionPatchDto;
import preproject.spring.question.dto.QuestionPostDto;
import preproject.spring.question.entity.Question;
import preproject.spring.question.mapper.QuestionMapper;
import preproject.spring.question.service.QuestionService;

import java.net.URI;
import java.util.List;

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
    public ResponseEntity<Question> getQuestion(@PathVariable("question-id") Long questionId){
        Question question = questionService.findQuestion(questionId);

        return ResponseEntity.ok(question);
    }

    @GetMapping
    public ResponseEntity<List<Question>> getQuestions(@RequestParam int page,
                                                       @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);

        List<Question> questions = pageQuestions.getContent();

        return ResponseEntity.ok(questions);
    }

}
