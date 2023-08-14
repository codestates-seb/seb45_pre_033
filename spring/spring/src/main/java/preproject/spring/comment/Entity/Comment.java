package preproject.spring.comment.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.spring.answer.Entity.Answer;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @Column
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

}
