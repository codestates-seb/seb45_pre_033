package preproject.spring.tag.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import preproject.spring.question.dto.QuestionResponseDto;
import preproject.spring.question.entity.Question;
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
                        .path(QUESTION_DEFAULT_URL + "/{tag-title}")
                        .buildAndExpand(tag.getTagTitle())
                        .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping("/{tag-title}/question")
    public ResponseEntity<List<Question>> getQuestionByTag(@PathVariable("tag-title") String tagTitle) {
        List<Question> questions = tagService.getQuestionsByTagTitle(tagTitle);

        return ResponseEntity.ok(questions);
    }

    @DeleteMapping("/{tag-title}")
    public ResponseEntity deleteQuestion(@PathVariable("tag-title") String tagTitle){
        tagService.deleteTag(tagTitle);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
