package preproject.spring.comment.service;

import org.springframework.transaction.annotation.Transactional;
import preproject.spring.comment.Entity.Comment;
import preproject.spring.comment.dto.CommentReqDto;
import preproject.spring.comment.dto.CommentResDto;

public interface CommentService {

    // 댓글 등록
    Comment createComment (Comment comment) throws Exception;

    // 댓글 수정
    @Transactional
    CommentResDto updateComment(CommentReqDto commentReqDto) throws Exception;

    // 댓글 삭제
    void deleteComment(Long commentId) throws Exception;
}
