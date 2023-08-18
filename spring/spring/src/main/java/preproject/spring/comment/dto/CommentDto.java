package preproject.spring.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

public class CommentDto {

    @Getter
    @AllArgsConstructor
    public static class Post{
        private String content;
        private Long questionId;

    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long commentId;
        private Long answerId;
        private String content;
        private Long userId;
        private LocalDateTime createAt;
    }
}
