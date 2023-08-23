import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Qusetion from "../components/Question";
import axios from "axios";
import { useNavigate } from "react-router";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1120px;
  padding: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  width: 1096px;
  padding-left: 20px;
`;

const Titlesub = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  font-size: 18px;
  vertical-align: baseline;
  padding-bottom: 12px;
  align-items: center;
  padding-left: 10px;
`;

const Title = styled.h1`
  font-size: 2.07692308rem;
`;

const AskButton = styled.button`
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

const QustionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function QuestionsListPage({questions, setQuestions}) {
  
    const navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`/question?page=1&size=5`)
      .then((res) => {
        setQuestions(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        <QustionListContainer>
          <TitleContainer>
            <Title>모든 질문</Title>
            <AskButton onClick={() => navigate("/questionsubmit")}>
              질문하기
            </AskButton>
          </TitleContainer>
          <Titlesub>{questions.length}개의 질문</Titlesub>
          {questions.map((el) => (
            <Qusetion question={el} key={questions.questionId} />
          ))}
        </QustionListContainer>
      </Container>
    </>
  );
}
