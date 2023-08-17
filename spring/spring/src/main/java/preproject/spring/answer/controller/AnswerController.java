package preproject.spring.answer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import preproject.spring.answer.dto.AnswerReqDto;
import preproject.spring.answer.dto.AnswerResDto;
import preproject.spring.answer.service.AnswerService;

import java.util.List;

@RestController
@RequestMapping("/answer")
public class AnswerController {
    private final AnswerService answerService;


    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    // 답변 등록
    @PostMapping("/{question_id}")
    public ResponseEntity<AnswerResDto> createAnswer(@PathVariable(value = "question_id") Long questionId,
                                                     @RequestBody AnswerReqDto answerReqDto) throws Exception {
        try {

            answerReqDto.setQuestionId(questionId); // 질문 아이디
            answerReqDto.setUserId(1L); // 작성자 아이디 (나중에 수정하기) test 할 때 사용함

            AnswerResDto answerResDto = answerService.createAnswer(answerReqDto);

            return new ResponseEntity<>(answerResDto, HttpStatus.CREATED); // 성공 201 실패 500

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 답변 전체 조회
    @GetMapping("/{question_id}")
    public ResponseEntity<List<AnswerResDto>> getAllAnswers(@PathVariable(value = "question_id") Long questionId) throws Exception {
        try {
            List<AnswerResDto> answerResDtoList = answerService.getAllAnswer(questionId);

            return new ResponseEntity<>(answerResDtoList, HttpStatus.OK); // 성공 200 실패 500

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 답변 수정
    @PatchMapping("/{answer_id}")
    public ResponseEntity<AnswerResDto> updateAnswers(@PathVariable(value="answer_id") Long answerId, @RequestBody AnswerReqDto answerReqDto) throws Exception {
        try{
            answerReqDto.setAnswerId(answerId);

            AnswerResDto answerReList = answerService.updateAnswer(answerReqDto);
            return new ResponseEntity<>(answerReList, HttpStatus.OK); //200

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 500
        }

    }

    // 답변 삭제
    @DeleteMapping("/{answer_id}")
    public ResponseEntity<Void> deleteAnswers(@PathVariable(value="answer_id") Long answerId) throws Exception {

        try {
            answerService.deleteAnswer(answerId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
