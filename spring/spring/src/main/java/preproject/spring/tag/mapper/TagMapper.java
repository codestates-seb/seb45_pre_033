package preproject.spring.tag.mapper;

import org.mapstruct.Mapper;

import preproject.spring.tag.dto.TagPostDto;
import preproject.spring.tag.dto.TagResponseDto;
import preproject.spring.tag.entity.Tag;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag tagPostDtoToQuestion(TagPostDto tagPostDto);

    default TagResponseDto tagToTagResponseDto(Tag tag){

        TagResponseDto tagResponseDto = new TagResponseDto();
        tagResponseDto.setTagId(tag.getTagId());
        tagResponseDto.setTagTitle(tag.getTagTitle());

        return tagResponseDto;
    }

}
