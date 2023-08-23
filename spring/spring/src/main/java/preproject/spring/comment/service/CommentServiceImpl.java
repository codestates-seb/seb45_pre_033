package preproject.spring.comment.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.spring.User.repository.UserRepository;
import preproject.spring.comment.Entity.Comment;
import preproject.spring.comment.dto.CommentReqDto;
import preproject.spring.comment.dto.CommentResDto;
import preproject.spring.comment.repository.CommentRepository;

import java.util.Optional;

@Service(value = "commentService")
public class CommentServiceImpl implements CommentService {

    private final UserRepository userRepository;
    private final CommentRepository commentRepository;

    public CommentServiceImpl(UserRepository userRepository, CommentRepository commentRepository) {
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
    }

    @Override
    @Transactional
    public CommentResDto createComment(CommentReqDto commentReqDto) throws Exception {
        try {
            Comment comment = commentReqDto.createComment();
            commentRepository.save(comment);

            comment.setUser(userRepository.getReferenceById(comment.getUser().getUserId()));

            return CommentResDto.createCommentResDto()
                    .comment_id(comment.getCommentId())
                    .answer_id(comment.getAnswer().getAnswerId())
                    .user_id(comment.getUser().getUserId())
                    .writer(comment.getUser().getNickname())
                    .content(comment.getContent())
                    .createdAt(comment.getCreatedAt())
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    @Transactional
    public CommentResDto updateComment(CommentReqDto commentReqDto) throws Exception {
        try {
            Optional<Comment> getComment = commentRepository.findById(commentReqDto.getAnswerId());

            Comment comment = getComment.orElseThrow(() -> new Exception("작성된 댓글이 없습니다."));

            comment.updateComment(commentReqDto);

            return CommentResDto.createCommentResDto()
                    .comment_id(comment.getCommentId())
                    .answer_id(comment.getAnswer().getAnswerId())
                    .user_id(comment.getUser().getUserId())
                    .writer(comment.getUser().getNickname())
                    .content(comment.getContent())
                    .createdAt(comment.getCreatedAt())
                    .build();

        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw e;
        }
    }

    @Override
    @Transactional
    public void deleteComment(Long commentId) throws Exception {
        commentRepository.deleteById(commentId);

    }
}