package preproject.spring.User.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import preproject.spring.User.entity.Vote;
import preproject.spring.User.service.UserService;
import preproject.spring.User.service.VoteService;

@RestController
@RequestMapping("")
@Validated
@Slf4j
public class VoteController {

    private final VoteService voteService;
    private final UserService userService;
    //private final AnswerService answerService;

    public VoteController(VoteService voteService,
                          UserService userService
                          //,AnswerService answerService
    ) {
        this.voteService = voteService;
        this.userService = userService;
        //this.answerService = answerService;
    }

    //해당 end point는 answer controller 보고 변경될 수 있음.
    @PatchMapping("/answer/{answer-id}/{user-id}")
    public ResponseEntity<Boolean> pressVote(@PathVariable("answer-id")Long answerId,
                                             @PathVariable("user-id")Long userId){
        Vote vote = new Vote();
        vote.setUser(userService.findUser(userId));
        //vote.setAnswer(answerService.findAnswer(answerId))

        return ResponseEntity.ok(voteService.pressVote(vote));
    }

}
