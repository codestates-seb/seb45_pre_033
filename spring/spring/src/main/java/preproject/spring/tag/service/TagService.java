package preproject.spring.tag.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.spring.Exception.ExceptionCode;
import preproject.spring.Exception.LogicException;
import preproject.spring.question.entity.Question;
import preproject.spring.question.entity.QuestionTag;
import preproject.spring.question.repository.QuestionTagRepository;
import preproject.spring.tag.entity.Tag;
import preproject.spring.tag.repository.TagRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class TagService {
    private final TagRepository tagRepository;
    private final QuestionTagRepository qtagRepository;

    public TagService(TagRepository tagRepository,
                      QuestionTagRepository qtagRepository) {
        this.tagRepository = tagRepository;
        this.qtagRepository = qtagRepository;
    }

    public Tag createTag(Tag tag){

        return tagRepository.save(tag);
    }

    public Page<Tag> findTags(int page, int size) {
        return tagRepository.findAll(PageRequest.of(page, size,
                Sort.by("tagId").descending()));
    }

    @Transactional
    public void deleteTag(String tagTitle) {
        Tag findTag = findVerifiedTagByTitle(tagTitle);
        qtagRepository.delete((qtagRepository.findQuestionTagByTagTagTitle(findTag.getTagTitle())));
        tagRepository.delete(findTag);
    }

    public Tag findTag(String tagTitle) {
        return findVerifiedTagByTitle(tagTitle);
    }

    public List<Question> getQuestionsByTagTitle(String tagTitle) {
        Tag tag = tagRepository.findByTagTitle(tagTitle);
        if (tag != null) {
            List<Question> questions = new ArrayList<>();
            for (QuestionTag questionTag : tag.getQuestionTags()) {
                questions.add(questionTag.getQuestion());
            }
            return questions;
        }
        return Collections.emptyList();
    }

    private Tag findVerifiedTagByTitle(String tagTitle) {
        Tag tag = tagRepository.findByTagTitle(tagTitle);
        if (tag == null) {
            throw new LogicException(ExceptionCode.TAG_NOT_FOUND);
        }
        return tag;
    }
//    private Tag findVerifiedTag(Long tagId){
//        Optional<Tag> optionalTag = tagRepository.findById(tagId);
//        Tag findTag = optionalTag.orElseThrow(() -> new LogicException(ExceptionCode.TAG_NOT_FOUND));
//
//        return findTag;
//    }


}
