package preproject.spring.tag.entity;

import lombok.*;
import preproject.spring.question.entity.QuestionTag;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false)
    private String tagTitle;

    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags;

}
