package preproject.spring.comment.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import preproject.spring.comment.Entity.Comment;
import preproject.spring.comment.dto.CommentDto;
import preproject.spring.comment.dto.CommentReqDto;
import preproject.spring.comment.dto.CommentResDto;
import preproject.spring.comment.mapper.CommentMapper;
import preproject.spring.comment.service.CommentService;

@RestController
@RequestMapping("/answer/comment")public class CommentController {
    final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    // 등록
    @PostMapping("/{answer-id}")
    public ResponseEntity<CommentDto.Response> createComment(@PathVariable(value = "answer-id") Long answerId,
                                                             @RequestBody CommentDto.Post commentpost) throws Exception {
        try {
            Comment comment =commentService.createComment(mapper.commentPostChanger(commentpost));
            // comment에 유저정보 및 Answer에 연결해야 함.
            // ex create Service 안에서 혹은 받는값으로 연결.
            //comment.setAnswer();  // <- 여기에 Answer찾는걸 넣어야 함.
            // AnswerService를 연결해서 Answer가져오는 로직을 가져와 사용하던가, 혹은
            // CommentService에서 해당 Answer 를 검색해 가져와야 함.


            CommentDto.Response ResComment = mapper.commentResponseChanger(comment);

            return new ResponseEntity<>(ResComment, HttpStatus.CREATED); // 204 없으면 500
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 수정
    @PatchMapping("/{comment_id}")
    public ResponseEntity<CommentResDto> updateComment(@PathVariable(value = "comment_id") Long answer_id, @RequestBody CommentReqDto commentReqDto) throws Exception {
        try {
            commentReqDto.setAnswerId(answer_id);

            CommentResDto commentResDto = commentService.updateComment(commentReqDto);

            return new ResponseEntity<>(commentResDto, HttpStatus.OK); // 200
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // 500
        }
    }

    // 삭제
    @DeleteMapping("{comment_id}")
    public ResponseEntity<Void> deleteComment(@PathVariable(value = "comment_id") Long commentId) throws Exception {
        try {
            commentService.deleteComment(commentId);

            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404
        }
    }
}
