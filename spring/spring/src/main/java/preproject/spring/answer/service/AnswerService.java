package preproject.spring.answer.service;

import preproject.spring.answer.dto.AnswerReqDto;
import preproject.spring.answer.dto.AnswerResDto;

import java.util.List;

public interface AnswerService {

    // 답변 생성
    AnswerResDto createAnswer(AnswerReqDto answerReqDto) throws Exception;
    // 답변 리스트 조회
    List<AnswerResDto> getAllAnswer(Long questionId) throws Exception;
    // 답변 수정
    AnswerResDto updateAnswer(AnswerReqDto answerReqDto) throws  Exception;
    // 답변 삭제
    void deleteAnswer(Long answerId) throws Exception;
}
