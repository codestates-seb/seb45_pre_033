package preproject.spring.tag.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import preproject.spring.question.dto.QuestionResponseDto;
import preproject.spring.tag.dto.TagPostDto;
import preproject.spring.tag.dto.TagResponseDto;
import preproject.spring.tag.entity.Tag;
import preproject.spring.tag.mapper.TagMapper;
import preproject.spring.tag.service.TagService;


import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/tag")
public class TagController {

    private final static String QUESTION_DEFAULT_URL = "/tag";
    private TagService tagService;
    private TagMapper mapper;

    public TagController(TagService tagService, TagMapper mapper) {
        this.tagService = tagService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity<Tag> postTag(@RequestBody TagPostDto tagPostDto) {
        Tag tag = tagService.createTag(mapper.tagPostDtoToTag(tagPostDto));
        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(QUESTION_DEFAULT_URL + "/{tag-id}")
                        .buildAndExpand(tag.getTagId())
                        .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping("/{tag-id}")
    public ResponseEntity<TagResponseDto> getTag(@PathVariable("tag-id") Long tagId) {
        TagResponseDto tag = mapper.tagToTagResponseDto(tagService.findTag(tagId));

        return ResponseEntity.ok(tag);
    }
    @GetMapping
    public ResponseEntity<List<TagResponseDto>> getTags(@RequestParam int page,
                                  @RequestParam int size) {
        Page<Tag> pageTags = tagService.findTags(page-1, size);

        List<Tag> tags = pageTags.getContent();
        List<TagResponseDto> response = mapper.tagToTagResponseDtos(tags);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{tag-id}")
    public ResponseEntity deleteQuestion(@PathVariable("tag-id") Long tagId){
        tagService.deleteTag(tagId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
