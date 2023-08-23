import React,{useState} from "react";
import styled from "styled-components";
import QuestionTag from "../components/QuestionTag"
import axios from "axios";
import { useNavigate } from "react-router";

const Main = styled.div`
  max-width: 1100px;
  margin: 10px 0px 90px 30px;
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.h1`
  font-size: 35px;
  margin: 0px 0px 70px 10px;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  max-width: 1100px;
  height: 150px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(50, 50, 50, 0.3);
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0px 0px 0px 2px;
`;



const TopTextBox = styled.input`
  width: 1000px;
  height: 50px;
  padding: 15px;
  margin-top: 7px;
  border: 1px solid rgb(50, 50, 50, 0.5);
  border-radius: 7px;
  font-size: 16px;
`;

const Middle = styled.div`
  max-width: 1100px;
  height: 600px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid rgb(50, 50, 50, 0.3);
  border-radius: 5px;
`;

const MiddleTitle = styled.h1`
  font-size: 20px;
  margin: 0px 0px 0px 2px;
`;


const MiddleTextBox = styled.textarea`
  width: 1000px;
  height: 500px;
  padding: 15px;
  margin-top: 7px;
  border: 1px solid rgb(50, 50, 50, 0.5);
  border-radius: 7px;
  text-align: left;
  font-size: 16px;
`;
const Bottom = styled.div`
  max-width: 1100px;
  height: 180px;
  padding: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(50, 50, 50, 0.3);
  border-radius: 5px;
`;

const BottomTitle = styled.h1`
  font-size: 20px;
  margin: 0px 0px 0px 2px;
`;

const BottomTagBox = styled.div`
  width: 1000px;
  height: 50px;
  padding: 15px;
  margin-top: 7px;
  border: 1px solid rgb(50, 50, 50, 0.5);
  border-radius: 7px;
  display: flex;
  align-items: center;
`;
const BottomTextBox = styled.input`
  border: none;
  height: 40px;
  font-size: 16px;
  &:focus{
    outline: none;
  }
`;
const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #5a59a4;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
  &:hover{
    cursor: pointer;
  }
`;

export default function QuestionSubmit({ myInfor }) {
    const navigate=useNavigate()
    const [questionBody, setQuestionBody] = useState({
        "userId": `${myInfor.userId}`,
        "title": '',
        "content": '',
        "questionTags":[]
    })
    const [tagInput, setTagInput] = useState('')
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setQuestionBody((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    const handleTagChange = (event) => {
        setTagInput(event.target.value)
    }
    const handleKeyDown = (event) => {
    if (event.key === "Enter" && tagInput!=='') {
      setQuestionBody((prev) => ({
          ...prev,
          questionTags:[...questionBody.questionTags,{"tagTitle":tagInput}]
      }))
        axios.post('/tag',{"tagTitle":tagInput})
        setTagInput('')
        
    }
    };
    const handleTagDelete = (tagIdx) => {
        const deletedTags = questionBody.questionTags.filter((el, idx) => idx !== tagIdx)
        axios.delete(`/tag/${questionBody.questionTags[tagIdx].tagTitle}`)
          .then((res) => {
            setQuestionBody((prev) => ({
              ...prev,
              questionTags: deletedTags,
            }));
          })
          .catch((err) => console.log(err));
    }
    const handleSubmit = () => {
        if (questionBody.title === '' || questionBody.content === '' || questionBody.questionTags === []) {
            return;
        }
        axios.post("/question/registration", questionBody)
            .then(res => {
            navigate('/question')
            }).catch(err => {
            console.log(err)
        })
    }
  return (
    <Main>
      <QuestionTitle>질문하기</QuestionTitle>
      <Top>
        <Title>제목</Title>
        <TopTextBox
          type="text"
          id="TopInput"
          placeholder="제목을 입력하세요."
          value={questionBody.title}
          name="title"
          onChange={handleInputChange}
        />
      </Top>
      <Middle>
        <MiddleTitle>질문내용</MiddleTitle>
        <MiddleTextBox
          type="text"
          id="MiddleInput"
          placeholder="질문내용을 입력하세요."
          value={questionBody.content}
          name="content"
          onChange={handleInputChange}
        />
      </Middle>
      <Bottom>
        <BottomTitle>태그</BottomTitle>
        <BottomTagBox>
          {questionBody.questionTags.map((el, idx) => (
            <QuestionTag
              tag={el.tagTitle}
              idx={idx}
              handleTagDelete={handleTagDelete}
              key={idx}
            />
          ))}
          <BottomTextBox
            type="text"
            id="BottomInput"
            placeholder="태그를 입력하세요."
            value={tagInput}
            onChange={handleTagChange}
            onKeyDown={handleKeyDown}
          />
        </BottomTagBox>
      </Bottom>
      <SubmitButton onClick={handleSubmit}>작성 완료</SubmitButton>
    </Main>
  );
};

