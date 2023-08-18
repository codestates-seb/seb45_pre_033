package preproject.spring.User.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.spring.Exception.ExceptionCode;
import preproject.spring.Exception.LogicException;
import preproject.spring.User.entity.User;
import preproject.spring.User.repository.UserRepository;
import java.time.LocalDateTime;

import java.util.Optional;

@Service
@Transactional
public class UserService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;


    public UserService(UserRepository repository,PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;

    }
    @Transactional(readOnly = true)
    public Boolean checkEmail(String email){

        return repository.findOptionalByEmail(email).isEmpty();
    }

    //암호화된 비밀번호 비교
    private boolean authenticate(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }

    //비밀번호 맞는지 체크
    public Boolean checkPassword(String email ,String password){
        User user = repository.findByEmail(email);
        return authenticate(password, user.getPassword());

    }

    public User loginUser(String email){
        return repository.findByEmail(email);
    }


    public User createUser(User user){
        //email 검증
        verifyEmail(user.getEmail());

        //비밀전호 단방향 암호화
        String encryptPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptPassword);

        //초기설정
        user.setProfile_message("hello");
        user.setImage_url("/static/bee_happy.png");
        user.setRole(User.Role.USER);
        user.setCreatedAt(LocalDateTime.now());

        User saveUser = repository.save(user);
        return saveUser;
    }

    public User updateUser(User user){
        User changeUser = verifyUser(user.getUserId());

        Optional.ofNullable(user.getEmail()).ifPresent(changeUser::setEmail);
        Optional.ofNullable(user.getNickname()).ifPresent(changeUser::setNickname);
        Optional.ofNullable(user.getProfile_message()).ifPresent(changeUser::setProfile_message);
        Optional.ofNullable(user.getImage_url()).ifPresent(changeUser::setImage_url);

        changeUser.setModifiedAt(LocalDateTime.now());

        return repository.save(changeUser);
    }

    @Transactional(readOnly = true)
    public User findUser(Long userId) {
        return verifyUser(userId);
    }

    public Page<User> findUsers(int page, int size) {
        return repository.findAll(PageRequest.of(page, size,
                Sort.by("userId").descending()));
    }

    public void deleteUser(Long userId) {
        User user = findUser(userId);

        repository.delete(user);
    }


    private void verifyEmail(String email){
        Optional<User> user = repository.findOptionalByEmail(email);
        if (user.isPresent())
            throw new LogicException(ExceptionCode.USER_EXISTS);

    }

    @Transactional(readOnly = true)
    public User verifyUser(Long userId){
        Optional<User> user = repository.findById(userId);

        return user.orElseThrow(()->
                new LogicException(ExceptionCode.USER_NOT_FOUND)
        );
    }
}
