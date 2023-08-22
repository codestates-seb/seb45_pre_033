import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExitModal from "../components/ExitModal";
import MyPageAnswer from "../components/MypageAnswer";
import axios from "axios";

const Main = styled.div`
width: 1120px;
  margin-top: 10px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Top = styled.div`
  max-width: 1100px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

const Middle = styled.div`
  max-width: 1120px;
  margin: 20px 0px 10px 0;
  display: flex;
`;

const Bottom = styled.div`
  max-width: 1100px;
  margin-top: 10px;
  margin-bottom: 90px;
  display: flex;
  border-top: 1px solid lightgray;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  box-shadow: 0px 0px 3px 0px #989898;
  margin-left: 30px;
  margin-top: 20px;
`;

const UserName = styled.h3`
  font-size: 35px;
  margin: 20px 0px 20px 20px;
`;

const UserIntro = styled.h6`
  font-size: 20px;
  margin: 0px 0px 0px 20px;
`;

const ExitButton = styled.button`
  width: 110px;
  height: 40px;
  background-color: #ac9fde;
  color: #ffffff;
  font-size: 1.2em;
  padding: 10px 20px;
  margin: 30px 0px 30px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #43337d;
    transition: background-color 0.2s;
  }
`;
const MiddleTitle = styled.h2`
  padding-left: 10px;
  font-size: 30px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  margin:30px 0;
`;

const MyPage = ({ myInfor,setMyInfor }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData,setuserData]=useState(false)
  useEffect(() => {
      axios.get(`/user/mypage/${myInfor.userId}`)
          .then(res => {
          setuserData(res.data)
        console.log(res.data)
      }).catch(err=>console.log(err))
  }, []);
  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
    const handleSignOut = () => {
        axios.delete(`/user/mypage/${myInfor.userId}`)
            .then(res => {
            setMyInfor(false)
        }).catch(err=>console.log(err))
  }
  return (
    <Main>
      <Top>
        <ProfileImg src={userData.image_url} alt="Profile Image" />
        <div>
          <UserName>{userData.nickname}</UserName>
          <UserIntro>{userData.profile_message}</UserIntro>
        </div>
      </Top>
      <MiddleTitle>나의 질문</MiddleTitle>
      <Middle>
        <MyPageAnswer questions={userData.questions} />
      </Middle>
      <Bottom>
        <ExitButton onClick={modalHandler}>회원탈퇴</ExitButton>
        {isModalOpen && <ExitModal onClose={modalHandler} handleSignOut={handleSignOut} />}
      </Bottom>
    </Main>
  );
};

export default MyPage;
