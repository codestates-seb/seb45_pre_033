package preproject.spring.UserTest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.password.PasswordEncoder;
import preproject.spring.User.entity.User;
import preproject.spring.User.mapper.UserDto;
import preproject.spring.User.mapper.UserMapper;
import preproject.spring.User.repository.UserRepository;
import preproject.spring.User.service.UserService;

import java.util.Optional;

import static preproject.spring.User.entity.User.Role.USER;

class UserTest {

    PasswordEncoder passwordEncoder;


    @DisplayName("성공적인 User 데이터")
    @Test
    void createUserInfo() {
        //given
        User user = User.builder()
                .email("example@gmail.com")
                .password("example")
                .profile_message("hello")
                .image_url("hi.png")
                .role(USER)
                .build()
                ;

        //when

        //then

        Assertions.assertNotNull(user);

        Assertions.assertEquals("example@gmail.com",user.getEmail());
        Assertions.assertEquals("hello",user.getProfile_message());
        Assertions.assertEquals("hi.png",user.getImage_url());
        Assertions.assertEquals(USER,user.getRole());
    }



}