package preproject.spring.tag.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import preproject.spring.tag.dto.TagPostDto;
import preproject.spring.tag.entity.Tag;
import preproject.spring.tag.mapper.TagMapper;
import preproject.spring.tag.service.TagService;


import java.net.URI;
import java.util.List;

@RestController
public class TagController {

    private final static String QUESTION_DEFAULT_URL = "/tag";
    private TagService tagService;
    private TagMapper mapper;
    @PostMapping
    public ResponseEntity<Tag> postQuestion(@RequestBody TagPostDto tagPostDto) {
        Tag tag = tagService.createTag(mapper.tagPostDtoToQuestion(tagPostDto));
        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(QUESTION_DEFAULT_URL + "/{tag-id}")
                        .buildAndExpand(tag.getTagId())
                        .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping("/{tag-id}")
    public ResponseEntity<Tag> getTag(@PathVariable("tag-id") Long tagId) {
        Tag tag = tagService.findTag(tagId);

        return ResponseEntity.ok(tag);
    }
    @GetMapping
    public ResponseEntity<List<Tag>> getTags(@RequestParam int page,
                                  @RequestParam int size) {
        Page<Tag> pageTags = tagService.findTags(page-1, size);

        List<Tag> tags = pageTags.getContent();

        return ResponseEntity.ok(tags);
    }
}
