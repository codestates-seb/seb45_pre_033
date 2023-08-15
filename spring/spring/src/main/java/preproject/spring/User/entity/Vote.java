package preproject.spring.User.entity;


import lombok.*;
import preproject.spring.answer.Entity.Answer;

import javax.persistence.*;


@Getter@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Vote {

    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @Column
    private Boolean press = true;

}
