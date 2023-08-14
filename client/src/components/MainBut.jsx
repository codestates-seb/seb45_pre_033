import styled from "styled-components";

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
  &:hover{
    font-size: 23px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function MainBut() {
    return (
      <Container>
        <Button>회원가입</Button>
        <Button>로그인</Button>
      </Container>
    );
}
