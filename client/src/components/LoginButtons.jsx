import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function LoginButtons({ Button, handleShowLogin, handleShowSignUp }) {
  return (
    <Container>
      <Button onClick={handleShowSignUp}>회원가입</Button>
      <Button onClick={handleShowLogin}>로그인</Button>
    </Container>
  );
}
