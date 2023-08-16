package preproject.spring.User;


import lombok.*;

import javax.persistence.*;


@Getter@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Vote {

    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne()
    private User user;

    //@ManyToOne
    //private Answer answer;

    @Column
    private Boolean press = true;

}
