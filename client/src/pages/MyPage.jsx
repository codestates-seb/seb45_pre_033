import React, { useState } from 'react';
import styled from 'styled-components';
import ExitModal from '../components/ExitModal';

const Main = styled.div`
    max-width: 1100px;
    margin-top: 10px;
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    max-width: 1100px;
    margin-top: 10px;
    margin-bottom: 90px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(50, 50, 50, 0.5);
    padding-bottom: 20px;
`;

const Bottom = styled.div`
    max-width: 1100px;
    margin-top: 10px;
    margin-bottom: 90px;
    display: flex;
    border-top: 1px solid rgb(50, 50, 50, 0.5);
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

//프로필 확인용 더미데이터 (추후 삭제예정)
const UserData = {
    name: '카리나',
    imageSrc: 'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMTNfOCAg/MDAxNjQyMDgxOTA5Mzgy.8P0lY4B9G9MeVMSgrNwXpDulXQ6Nkh5A8Li3nodyfSog.TfnRYytqZvwx3ZVfCfd0e_ZIdpruBoKIZ3UrxQPeqJUg.GIF.mozzick/iu8.gif?type=w800',
    intro: '이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.'
};


const MyPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExitClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
        <Main>
            <Top>
                <ProfileImg src={UserData.imageSrc} alt="Profile Image" />
                <div>
                    <UserName>{UserData.name}</UserName>
                    <UserIntro>{UserData.intro}</UserIntro>
                </div>
            </Top>
            <Bottom>
                <ExitButton onClick={handleExitClick}>회원탈퇴</ExitButton>
                {isModalOpen && <ExitModal onClose={handleCloseModal} />}
            </Bottom>
        </Main>
    );
};

export default MyPage;
