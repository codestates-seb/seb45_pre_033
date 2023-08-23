package preproject.spring.comment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import preproject.spring.comment.Entity.Comment;
import preproject.spring.comment.dto.CommentDto;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CommentMapper {

    Comment commentPostChanger(CommentDto.Post commentpost);

    CommentDto.Response commentResponseChanger(Comment comment);
}
