import React from 'react';
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
    color: red;
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
export default function Header () {
    return (
        <Container>
            <HeaderContainer>
                <LogoContainer><img src="/SOicon.svg"/>Yeongho overflow</LogoContainer>
                <Searchfilter/>
                <SearchContainer>
                    <img src="/search.svg"/>
                    <input type="text" placeholder="검색..."/>
                </SearchContainer>
                <ImageContainer><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" /></ImageContainer>
                <Button>마이페이지</Button>
                <LogoutButton>로그아웃</LogoutButton>
            </HeaderContainer>
        </Container>
    );
}