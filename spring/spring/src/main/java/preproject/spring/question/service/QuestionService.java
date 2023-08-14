package preproject.spring.question.service;

import org.springframework.stereotype.Service;
import preproject.spring.Exception.ExceptionCode;
import preproject.spring.Exception.LogicException;
import preproject.spring.question.entity.Question;
import preproject.spring.question.repository.QuestionRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question){

        return questionRepository.save(question);
    }

//    public Question updateQuestion(Question question){
//        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
//        Optional.ofNullable(question.getTitle())
//                        .ifPresent(title -> findQuestion.setTitle(title));
//        Optional.ofNullable(question.getContent())
//                        .ifPresent(content -> findQuestion.setContent(content));
//        //태그
//        findQuestion.setModifiedAt(LocalDateTime.now());
//        return findQuestion;
//    }

    public Question findQuestion(Long questionId){

        return findVerifiedQuestion(questionId);
    }

    public List<Question> findQuestions(){
        return questionRepository.findAll();
    }

//    public Question deleteQuestion(Long questionId){
//        Question question = findVerifiedQuestion(questionId);
//
//        questionRepository.delete(question);
//    }


    private Question findVerifiedQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()-> new LogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
