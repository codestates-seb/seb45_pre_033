import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Qusetion from "../components/Question";
import axios from "axios";

    const Container = styled.div`
        display:flex ;
        align-items: center;
        justify-content: center;
        padding-top: 56px;

    `;

    const TitleContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    `;

    const Titlesub = styled.div`
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid lightgray;
        font-size: 1.30769231rem;
        vertical-align: baseline;
        padding-bottom: 12px;
        align-items: center;
    `;

    const Title = styled.h1`
        font-size: 2.07692308rem;
    `;

    const AskButton =styled.button`
         background-color : #0A95FF;
         color: white;
         display: block;
         border-radius: 8px;
         height: 45px;
         border: 1px solid white;
         &:hover{
            background-color : #0575ca;
         }
    `;

    const QustionListContainer = styled.div`
        display: flex;
        flex-direction: column;
    `

    export default function QuestionsListPage ({questions, setQuestions}) {


        useEffect(() => {
            axios.get(`/question?page=1&size=5`)
            .then(res =>{setQuestions(res.data)})
            .catch(err => console.log(err))
        }, []);

        return (
            <>
            <Container>
                <QustionListContainer>
                <TitleContainer>
                    <Title>모든 질문</Title>
                    <AskButton>질문하기</AskButton>
                </TitleContainer>
                <Titlesub>{questions.length}개의 질문</Titlesub>
                    {questions.map(Qusetion)}
                </QustionListContainer>
            </Container>
            </>
        )
    }