package preproject.spring.tag.service;

import preproject.spring.tag.entity.Tag;
import preproject.spring.tag.repository.TagRepository;

import java.util.List;

public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createTag(Tag tag){

        return tagRepository.save(tag);
    }

    public List<Tag> findTags() {
        return tagRepository.findAll();
    }
}
