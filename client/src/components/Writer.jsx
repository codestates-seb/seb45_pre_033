import React, { useEffect, useState } from "react";
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
  font-size: 15px;
  font-weight: 600;
  width: 130px;
  text-align: center;
`;
export default function Writer({ answer, writer, email, url }) {
  const [devideEmail, setDevideEmail] = useState("")
  const [devideAdress, setDevideAdress] = useState("");
  useEffect(() => {
    if (email) {
      const [devideEmail, devideAdress] = email.split("@");
      setDevideEmail(devideEmail);
      setDevideAdress(devideAdress);
    }
  },[email])
  return (
    <UserContainer answer={answer}>
      <UserImg src={`${url}`} alt="writerImg" />
      <UserTextContainer>
        <UserName answer={answer}>{writer}</UserName>
        <UserEmail answer={answer}> {`${devideEmail}@ ${devideAdress}`}</UserEmail>
      </UserTextContainer>
    </UserContainer>
  );
}