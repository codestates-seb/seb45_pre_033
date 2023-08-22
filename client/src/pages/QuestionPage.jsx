import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Writer from "../components/Writer";
import Answer from "../components/Answer";
import { useParams,useNavigate } from "react-router";
import axios from "axios";

const QuestionBody = styled.div`
    width: 1120px;
    padding: 24px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    min-height: 800px;
`
const TitleContainer=styled.div`
    display: flex;
    width: 1096px;
    justify-content: space-between;
    padding-left: 23px;
`
const QuestionTitle = styled.h1`
    font-weight: bold;
    flex-grow: 1 0 0;
`

const QuestionButton = styled.button`
  width: 105px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #5a59a4;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
`;
const AtContainer = styled.div`
    width: 1096px;
    height: 25px;
    border-bottom: 2px solid lightgray ;
    font-size: 13px;
    padding-left: 30px;
    font-weight: 500;
`
const AtTextSpan = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #484848;
`
const ContentContainer = styled.p`
    width: 1050px;
    min-height: 400px;
    padding-right: 200px;
`
const TagContainer=styled.div`
    width: 1050px;
    display: flex;
    gap: 5px;
    justify-content: start;

`
const Tag = styled.div`
  height: 25px;
  border-radius: 5px;
  border: none;
  background-color: #5a59a4;
  color: white;
  padding: 3px;
  font-weight: bold;
`;
const WriterContainer=styled.div`
    height: 80px;
    width: 1096px;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
`
const WriterDeco = styled.span`
  height: 80px;
  font-size: 15px;
  color: #484848;
  font-weight: bold;
  padding-top: 60px;
`;
const AnswerContainer = styled.div`
    width: 1096px;
    margin-top: 80px;
`
const AnswerTitle = styled.h2`
  font-weight: bold;
  width: 1096px;
  height: 50px;
  padding-left: 20px;
  margin: 30px 0;
  border-bottom: 1px lightgray solid;
`
const AnswerSubmitTitle = styled(AnswerTitle)`
  border-bottom: none;
  margin-bottom: 10px;
  padding-left: 30px;
`
const AnswerSubmitContainer = styled.div`
  width: 1096px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`
const AnswerInput = styled.textarea`
  width: 1050px;
  height: 200px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px lightgray solid;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 15px;
  resize: none;
`
export default function QuestionPage({myInfor}) {
  const { id } = useParams();
  const navigate=useNavigate()
  const [questionInfo, setQuestionInfo] = useState(false)
  const [questionInput,setQuestionInput]= useState('')
  useEffect(() => {
      axios.get(`/question/${id}`)
        .then(res => {
      setQuestionInfo(res.data)
      console.log(res.data)
      }).catch(err => {
      console.log(err)
    })
  }, [])
  const handleInput = (event) => {
    setQuestionInput(event.target.value);
  };
  const isSameDay = function (day) {
    let today = new Date();
    let createdDay = new Date(day);
    if (
      today.getFullYear() === createdDay.getFullYear() &&
      today.getMonth() === createdDay.getMonth() &&
      today.getDate() === createdDay.getDate()
    ) {
      return createdDay.toLocaleTimeString();
    } else if (today.getFullYear() === createdDay.getFullYear()) {
      return `${createdDay.getMonth() + 1}월 ${createdDay.getDate()}일`;
    } else {
      return `${createdDay.getFullYear()}년 ${
        createdDay.getMonth() + 1
      }월 ${createdDay.getDate()}일`;
    }
  };
  const handleAnswerSubmit = () => {
    axios.post(`/answer/${questionInfo.questionId}/${myInfor.userId}`, { "content": questionInput })
    .then(res => {
      axios.get(`/question/${id}`)
        .then(res => {
      setQuestionInfo(res.data)
      }).catch(err => {
      console.log(err)
    })
    }).catch(err=>console.log(err))
  }
    
  return (
    <>
      {questionInfo ? (
        <QuestionBody>
          <TitleContainer>
            <QuestionTitle>{questionInfo.title}</QuestionTitle>
            <QuestionButton onClick={() => navigate("/questionsubmit")}>
              질문하기
            </QuestionButton>
          </TitleContainer>
          <AtContainer>
            {isSameDay(questionInfo.createdAt)} <AtTextSpan>작성됨 </AtTextSpan>
            {isSameDay(questionInfo.modifiedAt)}
            <AtTextSpan>수정됨 </AtTextSpan>
          </AtContainer>
          <ContentContainer>{questionInfo.content}</ContentContainer>
          <TagContainer>
            {questionInfo.questionTags.map((el, idx) => (
              <Tag key={idx}>{el.tag.tagTitle}</Tag>
            ))}
          </TagContainer>
          <WriterContainer>
            <WriterDeco>질문자</WriterDeco>
            <Writer
              writer={questionInfo.writer}
              email={questionInfo.email}
              url={questionInfo.image_url}
            />
          </WriterContainer>
          <AnswerContainer>
            <AnswerTitle>{questionInfo.answers.length} 개의 답변</AnswerTitle>
            {questionInfo.answers.length > 0 ? (
              questionInfo.answers.map((el, idx) => (
                <Answer
                  myInfor={myInfor}
                  key={idx}
                  answer={el}
                  isSameDay={isSameDay}
                  setQuestionInfo={setQuestionInfo}
                  id={id}
                />
              ))
            ) : (
              <></>
            )}
          </AnswerContainer>
          <AnswerSubmitContainer>
            <AnswerSubmitTitle>답변 입력하기</AnswerSubmitTitle>
            <AnswerInput value={questionInput} onChange={handleInput} />
            <QuestionButton onClick={() => handleAnswerSubmit}>
              답변 작성 완료
            </QuestionButton>
          </AnswerSubmitContainer>
        </QuestionBody>
      ) : (
        <></>
      )}
    </>
  );
}