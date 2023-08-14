package preproject.spring.answer.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.time.LocalDateTime;

@Getter @Setter @Entity
@NoArgsConstructor
@AllArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    //@ManyToOne
    //@JoinColumn(name = "question_id")
    //private Question question;

    //@ManyToOne
    //JoinColumn(name = "user_id")
    //private User user;

    @Column
    private String content;

    @Column
    private LocalDateTime createdAt = LocalDateTime.now();

}
