package preproject.spring.tag.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import preproject.spring.question.entity.QuestionTag;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Tag {

    @Id
    @Column(nullable = false, unique = true)
    private String tagTitle;

    @JsonBackReference
    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();


}
