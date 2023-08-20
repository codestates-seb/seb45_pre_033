import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 70px;
  font-size: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const Cancelbutton = styled.button`
    background-color: #43337d;
    width: 80px;
    height: 45px;
    font-size: 23px;
    color: #ffffff;
    margin: 60px 85px 9px 27px;
    border-radius: 5px;
    cursor: pointer;
`;

const Checkbutton = styled.button`
    background-color: #43337d;
    width: 80px;
    height: 45px;
    font-size: 23px;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
`;

const ExitModal = ({ onClose }) => {
    const handleModalClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
    return (
      <ModalWrapper onClick={handleModalClick}>
        <ModalContent>
          <p>정말로 회원 탈퇴하시겠습니까?</p>
          <Cancelbutton onClick={onClose}>취소</Cancelbutton>
          <Checkbutton onClick={onClose}>확인</Checkbutton>
        </ModalContent>
      </ModalWrapper>
    );
  };
  
  

export default ExitModal;