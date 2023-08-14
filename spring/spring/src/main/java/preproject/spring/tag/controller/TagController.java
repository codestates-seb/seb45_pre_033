package preproject.spring.tag.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import preproject.spring.tag.dto.TagPostDto;
import preproject.spring.tag.dto.TagResponseDto;
import preproject.spring.tag.entity.Tag;
import preproject.spring.tag.mapper.TagMapper;
import preproject.spring.tag.service.TagService;


import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class TagController {

    private final static String QUESTION_DEFAULT_URL = "/tag";
    private TagService tagService;
    private TagMapper mapper;
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody TagPostDto tagPostDto) {
        Tag tag = tagService.createTag(mapper.tagPostDtoToQuestion(tagPostDto));
        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(QUESTION_DEFAULT_URL + "/{tag-id}")
                        .buildAndExpand(tag.getTagId())
                        .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping
    public ResponseEntity getTags() {
        List<Tag> tags = tagService.findTags();

        List<TagResponseDto> response =
               tags
                        .stream()
                        .map(tag -> mapper.tagToTagResponseDto(tag))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
