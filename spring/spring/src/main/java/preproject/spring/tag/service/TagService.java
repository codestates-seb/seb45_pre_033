package preproject.spring.tag.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import preproject.spring.Exception.ExceptionCode;
import preproject.spring.Exception.LogicException;
import preproject.spring.tag.entity.Tag;
import preproject.spring.tag.repository.TagRepository;

import java.util.List;
import java.util.Optional;

public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createTag(Tag tag){

        return tagRepository.save(tag);
    }

    public Page<Tag> findTags(int page, int size) {
        return tagRepository.findAll(PageRequest.of(page, size,
                Sort.by("tagId").descending()));
    }

    public Tag findTag(Long tagId) {
        return findVerifiedTag(tagId);
    }

    private Tag findVerifiedTag(Long tagId){
        Optional<Tag> optionalTag = tagRepository.findById(tagId);
        Tag findTag = optionalTag.orElseThrow(() -> new LogicException(ExceptionCode.TAG_NOT_FOUND));

        return findTag;
    }
}
