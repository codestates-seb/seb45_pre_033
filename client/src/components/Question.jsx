import React from "react";
import styled from "styled-components";



const QuestionContainer = styled.div`
    display: flex;
    width: 720px;
    padding: 0 16px;
    border-bottom: 1px solid lightgray;
    padding: 16px;
`;

const AnswerContainer = styled.div`
    display: flex;
    width: 108px;
    margin-right: 16px;
    justify-content: flex-end;
    align-items: center;
`;

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    width: 612px;
`;

const Title = styled.h3`
    color: #3482e9;
    font-weight: 400;
    overflow-wrap: break-word;
    display: block;
    margin-bottom: 0.3846rem;
    margin-top: -0.15rem;
    padding-right: 24px;
`;

const Contents = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Meta = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    row-gap: 8px;
`;

const TagContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
`;
const Tags = styled.li`
    list-style: none;
    margin-right: 4px;
    padding: 5px;
    background-color: #e1ecf4;
    color: #39739d;
    font-size: 14px;
    border-radius: 5px;
`;

const UserCard = styled.div`
    display: flex;
    flex-direction: row;
`;

const Time = styled.div`
    color: gray;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #3482e9;
    padding: 0 4px;
`;

const ProfileImg = styled.div`
width: 16px;
height: 16px;
display: flex;
padding-right: 2px;
padding-top: 4px;
align-items: center;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}
`;




export default function Qusetion (questions) {
    const isSameDay = function (day) {
        let today = new Date();
        let createdDay = new Date(day); 
        if (today.getFullYear() === createdDay.getFullYear() && today.getMonth() === createdDay.getMonth() && today.getDate() === createdDay.getDate()) {
          return createdDay.toLocaleTimeString();
        }else if (today.getFullYear() === createdDay.getFullYear()) {
          return `${createdDay.getMonth()+1}월 ${createdDay.getDate()}일`
        } else {
          return `${createdDay.getFullYear()}년 ${createdDay.getMonth()+1}월 ${createdDay.getDate()}일`
        }
      }
    return (
        <QuestionContainer key={questions.questionId}>
            <AnswerContainer>{questions.answers.length} 개의 답변</AnswerContainer>
            <Posts>
                <Title>{questions.title}</Title>
                <Contents>{questions.content}</Contents>
                <Meta>
                    <TagContainer>
                        {questions.questionTags.map((tags) => {
                            return <Tags key={tags.tag.tagId}>{tags.tag.tagTitle}</Tags>;
                        })}
                    </TagContainer>    
                    <UserCard>
                        <ProfileImg><img src={questions.image_url}/></ProfileImg>
                        <UserInfo>{questions.writer}</UserInfo>
                        <Time>{isSameDay(questions.createdAt)}</Time>
                    </UserCard>
                </Meta>
            </Posts>
        </QuestionContainer>
    )
}