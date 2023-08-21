import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  width: 200px;
  height: 80px;
  background-color: ${(props) => (props.answer ? "white" : "#5a59a4")};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid white;
`;
const UserTextContainer = styled.div`
    width: 130px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const UserName = styled.div`
  color: ${(props) => (props.answer ? "#5a59a4" : "white")};
  font-size: 20px;
  font-weight: bold;
  width: 130px;
  text-align: center;
`;
const UserEmail = styled.div`
  color: ${(props) => (props.answer ? "#5a59a4" : "white")};
  font-size: 16px;
  font-weight: 400;
  width: 130px;
  text-align: center;
`;
export default function Writer({answer}) {
  return (
    <UserContainer answer={answer}>
      <UserImg
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="writerImg"
      />
      <UserTextContainer>
        <UserName answer={answer}>username</UserName>
        <UserEmail answer={answer}>{"user@ email.com "}</UserEmail>
      </UserTextContainer>
    </UserContainer>
  );
}