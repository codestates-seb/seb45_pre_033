package preproject.spring.User.mapper;

import lombok.AllArgsConstructor;
import lombok.Getter;
import preproject.spring.question.dto.QuestionResponseDto;
import preproject.spring.question.entity.Question;

import java.time.LocalDateTime;
import java.util.List;


public class UserDto {

    @Getter
    @AllArgsConstructor
    public static class Check{
    private String email;
    //추가 데이터 요청-한개만 Dto에 있으면 인식을 못함.
    private String test;

    }

    @Getter
    @AllArgsConstructor
    public static class Login{
        private String email;

        private String password;

    }

    @Getter
    @AllArgsConstructor
    public static class Post{

        //유효성 검증 validation -not space, 혹은 정규 패턴식 추가 가능.
        //추후 업데이트 시 삽입할 예정
        private String email;

        private String password;

        private String nickname;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{

        private String email;

        private String nickname;

        private String profile_message;

        private String image_url;


    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private Long userId;

        private String email;

        private String nickname;

        private String profile_message;

        private String image_url;

        private LocalDateTime createdAt;

        private List<QuestionResponseDto> questions;
    }


}
