package preproject.spring.UserTest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import preproject.spring.User.User;

import static preproject.spring.User.User.Role.USER;

class UserTest {

    @DisplayName("성공적인 User 데이터")
    @Test
    void createUserInfo() {
        //given
        User user = User.builder()
                .email("example@gmail.com")
                .password("example")
                .profile_message("hello")
                .imageurl("hi.png")
                .role(USER)
                .build()
                ;

        //when

        //then

        Assertions.assertNotNull(user);

        Assertions.assertEquals("example@gmail.com",user.getEmail());
        Assertions.assertEquals("hello",user.getProfile_message());
        Assertions.assertEquals("hi.png",user.getImageurl());
        Assertions.assertEquals(USER,user.getRole());
    }
}