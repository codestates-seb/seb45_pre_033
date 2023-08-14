import styled from "styled-components";
import { useState } from "react";

const InputLabel = styled.label`
    font-size: 24px;
    font-weight: bold;
    color:white;
`
const LoginInput=styled.input`
    height: 40px;
    width: 250px;
    background-color: white;
    border-radius: 10px;
    color: #43347d;
    font-size: 22px;
    font-weight: 400;
    margin-left: 5px;
    border: none;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 300px;
    gap: 8px;
    margin-top: 15px;
`;
const LoginButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    gap: 20px;
    width: 300px;
    height:40px ;
`;
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
const Alert = styled.div`
    height: 15px;
    color: red;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    width: 250px;
`
export default function LoginSubmit() {
    const[alert1,setAlert1]=useState(false)
    const[alert2,setAlert2]=useState(false)
    
    return (
      <Container>
        <InputContainer>
          <InputLabel>
            ID
            <LoginInput />
          </InputLabel>
          {alert1 ? <Alert>일치하는 아이디가 없습니다.</Alert> : <></>}
          <InputLabel>
            PW
            <LoginInput />
          </InputLabel>
          {alert2 ? <Alert>비밀번호가 일치하지 않습니다.</Alert> : <></>}
        </InputContainer>
        <LoginButtonContainer>
          <Button onClick={() => setAlert2(!alert2)}>회원가입</Button>
          <Button onClick={() => setAlert1(!alert1)}>로그인</Button>
        </LoginButtonContainer>
      </Container>
    );
}