package preproject.spring.answer.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.spring.answer.Entity.Answer;
import preproject.spring.answer.dto.AnswerReqDto;
import preproject.spring.answer.dto.AnswerResDto;
import preproject.spring.answer.respository.AnswerRepository;
import preproject.spring.comment.Entity.Comment;
import preproject.spring.comment.dto.CommentResDto;
import preproject.spring.comment.repository.CommentRepository;
import preproject.spring.question.entity.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service(value = "answerService")
public class AnswerServiceImpl implements AnswerService {

    private final AnswerRepository answerRepository;
    private final CommentRepository commentRepository;

    public AnswerServiceImpl(AnswerRepository answerRepository, CommentRepository commentRepository) {
        this.answerRepository = answerRepository;
        this.commentRepository = commentRepository;
    }

    @Override
    @Transactional
    public AnswerResDto createAnswer(AnswerReqDto answerReqDto) throws Exception {

        try {
            Answer answer = answerReqDto.createAnswer();
            answerRepository.save(answer);

            AnswerResDto answerResDto = new AnswerResDto();
            answerResDto.setAnswerId(answer.getAnswerId());
            answerResDto.setContent(answer.getContent());
            answerResDto.setQuestionId(answer.getQuestion().getQuestionId());
            answerResDto.setUserId(answer.getUser().getUserId());
            answerResDto.setCreatedAt(answer.getCreatedAt());
            answerResDto.setComment(new ArrayList<>());

            return answerResDto;

        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    @Transactional
    public List<AnswerResDto> getAllAnswer(Long questionId) throws Exception {

        Question question = new Question();
        question.setQuestionId(questionId);

        List<Answer> answerList = answerRepository.findByQuestion(question);

        List<AnswerResDto> answerResDtoList  = new ArrayList<>();

        for(Answer answer : answerList) {

            List<Comment> commentList = commentRepository.findByAnswer(answer);

            List<CommentResDto> commentResDtoList = new ArrayList<>();

            for(Comment comment : commentList) { // 클라이언트가 답변 목록을 요청했을 때, 각 답변에 대한 댓글 목록도 함께 반환하려는 목적으로 추가함
                CommentResDto commentResDtoTmp = new CommentResDto();
                commentResDtoTmp.setAnswer_id(answer.getAnswerId());
                commentResDtoTmp.setComment_id(comment.getCommentId());
                commentResDtoTmp.setContent(comment.getContent());
                commentResDtoTmp.setUser_id(comment.getUser().getUserId());
                commentResDtoTmp.setCreatedAt(comment.getCreatedAt());

                commentResDtoList.add(commentResDtoTmp);
            }

            AnswerResDto answerResDto = new AnswerResDto();

            answerResDto.setAnswerId(answer.getAnswerId());
            answerResDto.setContent(answer.getContent());
            answerResDto.setQuestionId(answer.getQuestion().getQuestionId());
            answerResDto.setUserId(answer.getUser().getUserId());
            answerResDto.setCreatedAt(answer.getCreatedAt());
            answerResDto.setComment(commentResDtoList);

            answerResDtoList.add(answerResDto);
        }

        return answerResDtoList;
    }

    @Override
    @Transactional
    public AnswerResDto updateAnswer(AnswerReqDto answerReqDto) throws Exception {

        try{
            Optional<Answer> getAnswer = answerRepository.findByAnswerIdWithComment(answerReqDto.getAnswerId());

            Answer answer = getAnswer.orElseThrow(() -> new Exception("Answer not found for id: " + answerReqDto.getAnswerId()));

            answer.updateAnswer(answerReqDto); // 업데이트

            List<CommentResDto> commentResDtoList = new ArrayList<>();

            for(Comment comment : answer.getComment()) {
                CommentResDto commentResDtoTmp = new CommentResDto();
                commentResDtoTmp.setAnswer_id(answer.getAnswerId());
                commentResDtoTmp.setComment_id(comment.getCommentId());
                commentResDtoTmp.setContent(comment.getContent());
                commentResDtoTmp.setUser_id(comment.getUser().getUserId());
                commentResDtoTmp.setCreatedAt(comment.getCreatedAt());

                commentResDtoList.add(commentResDtoTmp);
            }

            AnswerResDto answerResDto = new AnswerResDto();
            answerResDto.setAnswerId(answer.getAnswerId());
            answerResDto.setContent(answer.getContent());
            answerResDto.setQuestionId(answer.getQuestion().getQuestionId());
            answerResDto.setUserId(answer.getUser().getUserId());
            answerResDto.setCreatedAt(answer.getCreatedAt());
            answerResDto.setComment(commentResDtoList);

            return answerResDto;

        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw e;
        }
    }

    @Override
    @Transactional
    public void deleteAnswer(Long answerId) throws Exception {

        Answer answer = answerRepository.findByAnswerId(answerId);
        List<Comment> comments =answer.getComment();
        commentRepository.deleteAll(comments);
        answerRepository.deleteById(answerId);

    }
}
