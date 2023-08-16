package preproject.spring.User.entity;


import lombok.*;
import preproject.spring.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "users")
public class User {

    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.USER;

    @Column
    private String nickname;

    @Column
    private String profile_message;

    @Column
    private String image_url;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Vote> voteList = new ArrayList<>();



    public enum Role {
        USER("회원")
        ,ADMIN("관리자");

        @Getter
        private final String role;

        Role(String role){this.role=role;}
    }
}
