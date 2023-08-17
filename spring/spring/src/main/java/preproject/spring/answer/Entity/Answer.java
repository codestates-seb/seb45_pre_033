package preproject.spring.answer.Entity;

import lombok.*;
import preproject.spring.User.entity.User;
import preproject.spring.User.entity.Vote;
import preproject.spring.answer.dto.AnswerReqDto;
import preproject.spring.comment.Entity.Comment;
import preproject.spring.question.entity.Question;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter @Entity
@NoArgsConstructor
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private String content;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "answer")
    private List<Comment> comment = new ArrayList<>();


    @Builder(builderMethodName = "createAnswer")
    public Answer(Question question, User user, String content) {
        this.question = question;
        this.user = user;
        this.content = content;
    }

    public void updateAnswer(AnswerReqDto answerReqDto) {
        if(answerReqDto.getContent() != null) {
            this.content=answerReqDto.getContent();
        }
    }

    @Override
    public String toString() {
        return "Answer{" +
                "answerId=" + answerId +
                ", question=" + question +
                ", user=" + user +
                ", content='" + content + '\'' +
                ", createdAt=" + createdAt +
                ", comment=" + comment +
                '}';
    }
}