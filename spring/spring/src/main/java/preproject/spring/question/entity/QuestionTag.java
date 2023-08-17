package preproject.spring.question.entity;


import preproject.spring.tag.entity.Tag;

import javax.persistence.*;

@Entity
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;
}
