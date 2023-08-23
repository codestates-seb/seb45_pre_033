import React, { useState }from 'react';
import styled from "styled-components";
import Searchfilter from "./SearchFilter";
import { Link } from 'react-router-dom';
const Container = styled.header`
  z-index: 1;
  width: 100%;
  min-width: 1280px;
  height: 56px;
  display: flex;
  align-items: center;
  background-color: #43337D;
  border-bottom: 1px solid lightgray;
  justify-content: center;
  position: fixed;
`;

const HeaderContainer = styled.div`
    width: 1280px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`

const Button = styled.button`
  background-color: white;
  color: #43337d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  height: 30px;
  width: 85px;
  justify-content: center;
  border: none;
  padding-top: 4px;
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
    margin: 0 2px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;
const CustomLink = styled(Link)`
    text-decoration: none;
`
const SearchContainer = styled.form`
    display: flex;
    align-items: center;
    flex-shrink: 10000;
    flex-grow: 1;
    box-sizing: border-box;
    background-color: white;
    padding: 0 10px;
    padding-top: 4px;
    border-radius: 5px;
    height: 30px;
    border: none ;
    input {
    flex-grow: 1;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: bold;
  }
`;
const Dummyinput = styled.input`
    display: none;
`;

export default function Header({ setMyInfor, questions, handleChange, userInput, setFilteredQuestions, filteredQuestions }) {
    const handleLogOut = () => {
        setMyInfor(false)
    }
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
                <LogoContainer><img src="/SOicon.svg" alt='logo'/>Yeongho overflow</LogoContainer>
                <Searchfilter toggleState={toggleState} setToggleState={setToggleState}/>
                <SearchContainer>
                    <img src="/search.svg" alt='searchIcon'/>
                    <input type="text" placeholder="검색..." onChange={handleChange} onKeyDown={(e) => activeEnter(e)}/>
                    <Dummyinput type='text'/>
                </SearchContainer>
                <ImageContainer><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt='profile'/></ImageContainer>
                <CustomLink to={'/mypage'}><Button>마이페이지</Button></CustomLink>
                <LogoutButton onClick={handleLogOut}>로그아웃</LogoutButton>
            </HeaderContainer>
        </Container>
    );
}