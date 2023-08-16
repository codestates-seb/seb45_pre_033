package preproject.spring.User.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import preproject.spring.User.entity.User;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {

    User userPostChanger(UserDto.Post userpost);
    User userPatchChanger(UserDto.Patch userpatch);
    UserDto.Response userResponseChanger(User user);
}
