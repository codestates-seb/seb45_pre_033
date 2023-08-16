import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function LoginButtons({ Button, setShowLogin }) {
  return (
    <Container>
      <Button>회원가입</Button>
      <Button onClick={() => setShowLogin(true)}>로그인</Button>
    </Container>
  );
}
