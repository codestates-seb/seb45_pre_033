import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function LoginButtons({ Button, setLogin }) {
  return (
    <Container>
      <Button>회원가입</Button>
      <Button onClick={()=>setLogin(true)}>로그인</Button>
    </Container>
  );
}
