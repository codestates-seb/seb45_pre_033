package preproject.spring.User.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.spring.User.entity.User;
import preproject.spring.User.entity.Vote;
import preproject.spring.User.repository.VoteRepository;
import preproject.spring.answer.Entity.Answer;

import java.util.Optional;

@Service
@Transactional
public class VoteService {
    private final VoteRepository voteRepository;


    public VoteService(VoteRepository voteRepository) {
        this.voteRepository = voteRepository;

    }

   public Boolean pressVote(Vote vote){
        if (verifyPress(vote.getAnswer(),vote.getUser())) {
            voteRepository.save(vote);
            return true;
        }else {
            voteRepository.delete(vote);
            return false;
        }
   }

   private Boolean verifyPress(Answer answer, User user){
       Optional<Vote> vote = voteRepository.findByAnswerAndUser(answer, user);
       return vote.isEmpty();
   }

}
