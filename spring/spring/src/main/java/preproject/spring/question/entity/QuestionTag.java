package preproject.spring.question.entity;




import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.spring.tag.entity.Tag;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "TAG_TITLE")
    private Tag tag;

}
