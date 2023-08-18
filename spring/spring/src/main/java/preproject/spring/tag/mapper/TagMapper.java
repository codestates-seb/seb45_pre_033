package preproject.spring.tag.mapper;

import org.mapstruct.Mapper;

import preproject.spring.tag.dto.TagPostDto;
import preproject.spring.tag.dto.TagResponseDto;
import preproject.spring.tag.entity.Tag;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag tagPostDtoToTag(TagPostDto tagPostDto);
    TagResponseDto tagToTagResponseDto(Tag tag);

}
