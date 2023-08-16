package preproject.spring.question.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import preproject.spring.User.User;
import preproject.spring.answer.Entity.Answer;
//import preproject.spring.User.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column
    private String content;

//    @Column(nullable = false)
//    private String writer;

    @Column(nullable = false)
    @CreatedDate
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    @LastModifiedDate
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;


    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private List<QuestionTag> questionTags = new ArrayList<>();
}
