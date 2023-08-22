import axios from "axios";
import React,{useState} from "react";
import { styled } from "styled-components";

const SubmitContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: end;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
    gap: 5px;
`
const ReplyInput = styled.textarea`
    width: 950px;
    height: 60px;
    margin-right: 30px;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 8px;
    font-size: 16px;
    resize: none;
`;
const ButtonContainer = styled.div`
    gap: 10px;
    margin-right: 30px;
    display: flex;
`
const ReplyButton = styled.button`
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: lightgray;
    font-size: 15px;
    color: gray;
    font-weight: bold;
    &:hover{
        color: black;
    }
`

export default function ReplySubmit({ handleSubmitOn, myInfor, answer, setQuestionInfo, id }) {
  const [replyText, setReplyText] = useState("");
  const handleReplyText = (event) => {
    setReplyText(event.target.value);
  };
  const handleReplySubmit = () => {
    axios.post(`/answer/comment/${answer.answerId}/${myInfor.userId}`).then((res) => {
      axios
        .get(`/question/${id}`)
        .then((res) => {
          console.log(res.data);
          setQuestionInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <SubmitContainer>
      <ReplyInput value={replyText} onChange={handleReplyText} />
      <ButtonContainer>
        <ReplyButton onClick={handleSubmitOn}>취소</ReplyButton>
        <ReplyButton onClick={() => handleReplySubmit}>완료</ReplyButton>
      </ButtonContainer>
    </SubmitContainer>
  );
}