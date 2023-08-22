import React from "react";
import styled from "styled-components";
import User from "../components/User.jsx";

    
const HeaderRow = styled.h1`
  max-width: 1100px;
  font-size: 35px;
  padding: 0 20px;
  margin-bottom: 50px;
  margin-top: 30px;
`;


const UserPage = () => {
  return (
    <main>
      <HeaderRow>유저목록</HeaderRow>
      <User />
    </main>
  );
};

export default UserPage;
