import React,{useEffect,useState} from "react";
import styled from "styled-components";
import LoginButtons from "./LoginButtons";
import LoginSubmit from "./LoginSubmit";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;
  position: relative;
  margin-bottom: 15px;
  position: absolute;
  top: 290px;
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
  &:hover {
    font-size: 23px;
  }
`;

export default function Login({ handleShowSignUp }) {
  const title = "Yeongho overflow";
  const [showLogin, setShowLogin] = useState(false)
  const handleShowLogin = () => {
    setShowLogin(!showLogin)
  }
  useEffect(() => {
    setShowLogin(false);
  },[])

    return (
        <Container>
          <Title><Icon src="../sofLogo.png" />{title}</Title>
        {showLogin ? <LoginSubmit handleShowSignUp={handleShowSignUp} /> : <LoginButtons Button={Button} handleShowLogin={handleShowLogin} handleShowSignUp={handleShowSignUp} />}
        </Container>
    )
}