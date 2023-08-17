package preproject.spring.tag.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TagResponseDto {
    private Long tagId;
    private String tagTitle;
}
