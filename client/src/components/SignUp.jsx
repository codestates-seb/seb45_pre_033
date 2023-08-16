import React from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
    height: 100vh;
    width: 1280px;
    background-color: #ffffff27;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const SignUpInput=styled.input`
    height: 40px;
    width: 250px;
    background-color: white;
    border-radius: 10px;
    color: #43347d;
    font-size: 22px;
    font-weight: bold;
    margin-left: 5px;
    border: none;
    padding-left: 7px;
`
const Button = styled.button`
  width: 115px;
  height: 40px;
  border-radius: 10px;
  margin-top: 15px;
  color: #43347d;
  font-size: 22px;
  font-weight: bold;
  padding-top: 4px;
  border: none;
  &:hover {
    font-size: 23px;
  }
`;

export default function SignUp() {
    return (
        <SignUpContainer>

        </SignUpContainer>
    )
}