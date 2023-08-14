import React,{useEffect,useState} from "react";
import styled from "styled-components";
import MainBut from "./MainBut";

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

export default function Login() {
  const title = "Yeongho overflow";
  const [login,setLogin]=useState(false)
    return (
        <Container>
          <Title><Icon src="../sofLogo.png" />{title}</Title>
        {<MainBut />}
        </Container>
    )
}