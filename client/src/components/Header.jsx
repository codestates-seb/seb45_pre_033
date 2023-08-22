import React, { useState, useCallback, useEffect } from 'react';
import styled from "styled-components";
import Searchfilter from "./SearchFilter";

const Container = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  min-width: auto;
  height: 56px;
  display: flex;
  align-items: center;
  background-color: #43337D;
  border-bottom: 1px solid lightgray;
  justify-content: center;
`;

const HeaderContainer = styled.div`
    width: 1280px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    background-color: white;
    color: #43337D;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-weight: bold;
    height: 30px;
    width: 85px;
    justify-content: center;
    padding: 0 4px;
`;

const LogoutButton = styled(Button)`
    color: #eb7575;
`;

const LogoContainer = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    padding: 0 8px;
    font-size: 20px;
`;

const ImageContainer = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    padding: 0 8px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;

const SearchContainer = styled.form`
    display: flex;
    align-items: center;
    flex-shrink: 10000;
    flex-grow: 1;
    box-sizing: border-box;
    background-color: white;
    padding: 0 8px;
    border-radius: 5px;
    height: 30px;
    border: 1px solid ;
    input {
    flex-grow: 1;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const Dummyinput = styled.input`
    display: none;
`
export default function Header ({ questions, handleChange, userInput, setFilteredQuestions, filteredQuestions }) {
    const [toggleState, setToggleState] = useState(0);
    const keyword = userInput.toLowerCase();

      const activeEnter = (e) => {
        if(e.key === "Enter" && userInput !== '') {
          questionFilter();
          console.log(filteredQuestions)
          console.log(questions)
        }
      }
    
      const questionFilter = () =>{
        setFilteredQuestions(questions.filter(qusetion => { 
          if (toggleState === 0){
            return qusetion.title.toLowerCase().includes(keyword)
          } else if (toggleState === 1){
            return qusetion.writer.toLowerCase().includes(keyword)
          } else {
            return qusetion.questionTags.some(tag => {
                return tag.tag.tagTitle.toLowerCase().includes(keyword);
          })
        }
    }))};
    return (
        <Container>
            <HeaderContainer>
                <LogoContainer><img src="/SOicon.svg"/>Yeongho overflow</LogoContainer>
                <Searchfilter toggleState={toggleState} setToggleState={setToggleState}/>
                <SearchContainer>
                    <img src="/search.svg"/>
                    <input type="text" placeholder="검색..." onChange={handleChange} onKeyDown={(e) => activeEnter(e)}/>
                    <Dummyinput type='text'/>
                </SearchContainer>
                <ImageContainer><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" /></ImageContainer>
                <Button>마이페이지</Button>
                <LogoutButton>로그아웃</LogoutButton>
            </HeaderContainer>
        </Container>
    );
}