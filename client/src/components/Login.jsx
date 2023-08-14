import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 40px;
  position: relative;
  margin-bottom: 15px;
`;
const Icon = styled.img`
  height: 50px;
  width: 50px;
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  margin-top: 15px;
  color: #43347d;
  font-size: 22px;
  font-weight: bold;
  padding-top: 4px;
  border: none;
`;

export default function Login() {
    const title = "Yeongho overflow";
    return (
        <Container>
                <Title><Icon src="../sofLogo.png" />{title}</Title>
                <Container>
                    <Button>회원가입</Button>
                    <Button>로그인</Button>
                </Container>
        </Container>
    )
}