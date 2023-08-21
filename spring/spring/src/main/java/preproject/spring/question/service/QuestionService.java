package preproject.spring.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.spring.Exception.ExceptionCode;
import preproject.spring.Exception.LogicException;
import preproject.spring.User.entity.User;
import preproject.spring.User.service.UserService;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.answer.respository.AnswerRepository;
import preproject.spring.comment.Entity.Comment;
import preproject.spring.comment.repository.CommentRepository;
import preproject.spring.question.entity.Question;
import preproject.spring.question.repository.QuestionRepository;
import preproject.spring.tag.service.TagService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final UserService userService;
    private final TagService tagService;

    private final AnswerRepository answerRepository;
    private final CommentRepository commentRepository;

    public QuestionService(QuestionRepository questionRepository, UserService userService, TagService tagService,
                           AnswerRepository answerRepository,
                           CommentRepository commentRepository) {
        this.questionRepository = questionRepository;
        this.userService = userService;
        this.tagService = tagService;
        this.answerRepository = answerRepository;
        this.commentRepository = commentRepository;
    }


    public Question createQuestion(Question question){

        verifyQuestion(question);

        question.getQuestionTags()
                        .stream()
                                .forEach(questionTag ->
                                        tagService.findTag(questionTag.getTag().getTagTitle()));

        question.setCreatedAt(LocalDateTime.now());

        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        Optional.ofNullable(question.getTitle())
                        .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                        .ifPresent(content -> findQuestion.setContent(content));
        //태그
        findQuestion.setModifiedAt(LocalDateTime.now());
        return findQuestion;
    }

    public Question findQuestion(Long questionId){

        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size){
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    @Transactional
    public void deleteQuestion(Long questionId) {
        Question question = findVerifiedQuestion(questionId);

        List<Answer> answers = question.getAnswers();

        answers.forEach(answer -> {
            List<Comment> comments = answer.getComment();
            commentRepository.deleteAll(comments);
        });


        answerRepository.deleteAll(answers);
        questionRepository.delete(question);
    }



    private Question findVerifiedQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()-> new LogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    private void verifyQuestion(Question question){
        User findUser = userService.findUser(question.getUser().getUserId());
        question.setWriter(findUser.getNickname());
    }


}
