import React from "react";
import styled from "styled-components";
import Writer from "../components/Writer";
import Answer from "../components/Answer";

const QuestionBody = styled.div`
    width: 1120px;
    padding: 24px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 56px;
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

const AskButton = styled.button`
  width: 105px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #5a59a4;
  color: white;
  font-size: 16px;
  font-weight: bold;
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
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;
  padding-left: 20px;
`
const AnswerSubmitContainer = styled.div`
  width: 1096px;
  margin: 10px 0;
  gap: 10px;
`
export default function QuestionPage() {
    const content="I have made a new dummy sheet. I have included the expected result and the current result with my current code. I have tried with my best ability to try and code this, but it ultimately isn't working well for me. Basically, I need the blank Trans with quantities to be added to the one Trans. Same with price and discount. This is an extension of my previous question, so if you need some clarification, please check that as well. Let me know if you need some more info or help. If you are able to help, thank you so much. Any help/advice is greatly appreciated! Thank you so much for your effort and help! Let me know if anything else is needed."
    const tags=["javascript","function","variable"]
    return (
      <QuestionBody>
        <TitleContainer>
          <QuestionTitle>이 곳은 질문의 제목이 들어갈 곳입니다.</QuestionTitle>
          <AskButton>질문하기</AskButton>
        </TitleContainer>
        <AtContainer>
          8월 20일 <AtTextSpan>작성됨</AtTextSpan> 8월 20일{" "}
          <AtTextSpan>수정됨</AtTextSpan>
        </AtContainer>
        <ContentContainer>{content}</ContentContainer>
        <TagContainer>
          {tags.map((el,idx) => (
            <Tag key={idx}>{el}</Tag>
          ))}
        </TagContainer>
        <WriterContainer>
          <WriterDeco>질문자</WriterDeco>
          <Writer />
        </WriterContainer>
        <AnswerContainer>
          <AnswerTitle>1 개의 답변</AnswerTitle>
          <Answer content={content} />
        </AnswerContainer>
        <AnswerSubmitContainer>
          <AnswerTitle>답변 입력하기</AnswerTitle>
        </AnswerSubmitContainer>
      </QuestionBody>
    );
}