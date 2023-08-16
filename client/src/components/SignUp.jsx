import React,{useState,useEffect} from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
    height: 100vh;
    width: 1280px;
    background-color: #ffffff27;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SignUpInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;
`
const InputLabel = styled.label`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;
const SignUpInput=styled.input`
    height: 40px;
    width: 250px;
    background-color: white;
    border-radius: 10px;
    color: #43347d;
    font-size: 22px;
    font-weight: bold;
    margin-left: 5px;
    border: none;
    padding-left: 7px;
    margin-right: 128px;
`
const SignUpInputEmail = styled.input`
    height: 40px;
    width: 250px;
    background-color: white;
    border-radius: 10px;
    color: #43347d;
    font-size: 22px;
    font-weight: bold;
    margin-left: 5px;
    border: none;
    padding-left: 7px;
    margin-right: 12px;
`
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
const ButtonContainer = styled.div`
    display: flex;
    gap : 20px;
`

export default function SignUp() {
    const [infor, setInfor] = useState({
        email: ``,
        password: ``,
        passwordCheck: ``
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfor(prev => ({
            ...prev,
            [name]:value
        }))
    }
    
    return (
        <SignUpContainer>
            <SignUpInputContainer>
                <InputLabel>이메일<SignUpInputEmail type="text" value={infor.email} name="email" onChange={handleInputChange}/><Button>중복확인</Button></InputLabel>
                <InputLabel>비밀번호<SignUpInput type="password"value={infor.password} name="password" onChange={handleInputChange}/></InputLabel>
                <InputLabel>비밀번호 확인<SignUpInput type="password" value={infor.passwordCheck} name="passwordCheck" onChange={handleInputChange}/></InputLabel>
            </SignUpInputContainer>
            <ButtonContainer>
                <Button>취소</Button>
                <Button>완료</Button>
            </ButtonContainer>
        </SignUpContainer>
    )
}