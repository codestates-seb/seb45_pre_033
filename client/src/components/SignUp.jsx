import React,{useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios"

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
    gap: 10px;
    margin-left: 20px;
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
  width: 116px;
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
    margin-left: 30px;
`
const Alert = styled.h4`
  height: 20px;
  width: 500px;
  text-align: center;
  color: ${(props) => (props.green ? "greenyellow" : "coral")};
  font-size: 18px;
`;

export default function SignUp({ handleShowSignUp }) {

    const [emailChecked, setEmailChecked] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordChecked, setPasswordChecked] = useState(false);
    const [emailAlert, setEmailAlert] = useState(0);
    const [infor, setInfor] = useState({
        "email": "",
        "password": "",
    });
    const [passwordCheck,setPasswordCheck]=useState("")
    const emailAlerts = [
        "",
        "유효하지 않은 이메일입니다.",
        "중복 확인이 필요합니다.",
        "이미 사용 중인 이메일입니다."
    ];

    useEffect(() => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (emailRegex.test(infor.email)) {
            setEmailValid(true)
            setEmailAlert(2)
        }else {
            setEmailValid(false)
            setEmailAlert(1)
            if (infor.email === "") {
                setEmailAlert(0)
            }
        }
        if (emailChecked) {
           setEmailChecked(false);
        }
    }, [infor.email])
    
    useEffect(() => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (passwordRegex.test(infor.password)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    },[infor.password])
    useEffect(() => {
        if (passwordValid&&passwordCheck === infor.password) {
            setPasswordChecked(true);
        } else {
            setPasswordChecked(false)
        }
    },[passwordCheck])
    
    const handlePasswordCheckChange = (event) => {
        setPasswordCheck(event.target.value)
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfor(prev => ({
            ...prev,
            [name]:value
        }))
    }
    const emailCheck = () => {
        if (!emailValid) {
            return
        }
        const requestData = {
            "email": infor.email,
            "test":"whatever"
        }
        axios.post('/login/check', requestData)
            .then(res => {
            setEmailChecked(true)
            }).catch(err => {
            setEmailAlert(3)
        })
    }
    const handleSignUp = () => {
        if (!emailChecked||!passwordValid||!passwordChecked) {
            return;
        }
        const nickname = infor.email.split('@')[0]
        const data = { ...infor, "nickname": nickname }
        console.log(data)
        axios.post('/login/create', data)
            .then(res => {
            console.log("success!")
            handleShowSignUp();
            }).catch(err => {
            console.log(err.response.status)
        })
    }

    return (
        <SignUpContainer>
            <SignUpInputContainer>
                <InputLabel>이메일<SignUpInputEmail type="text" value={infor.email} name="email" onChange={handleInputChange} /><Button onClick={emailCheck}>중복확인</Button></InputLabel>
                {!emailChecked ? <Alert>{emailAlerts[emailAlert]}</Alert> : <Alert green>{"확인되었습니다."}</Alert>}
                <InputLabel>비밀번호<SignUpInput type="password" value={infor.password} name="password" onChange={handleInputChange} /></InputLabel>
                <Alert>{infor.password!==""&&!passwordValid?"8자 이상, 숫자와 영문 대/소문자":""}</Alert>
                <InputLabel>비밀번호 확인<SignUpInput type="password" value={passwordCheck} onChange={handlePasswordCheckChange} /></InputLabel>
                <Alert>{passwordCheck!==""&&!passwordChecked&&passwordValid?"비밀번호가 일치하지 않습니다.":""}</Alert>
            </SignUpInputContainer>
            <ButtonContainer>
                <Button onClick={handleShowSignUp}>취소</Button>
                <Button onClick={handleSignUp}>완료</Button>
            </ButtonContainer>
        </SignUpContainer>
    )
}