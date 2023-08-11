import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #43347d;
  background-image: url("/sof_main.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  min-height: 850px;
`;
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.div`
    color: white;
    font-weight: bold;
    font-size: 40px;
`
const Icon = styled.img`
    height: 50px;
    width : 50px;
`


export default function MainPage() {
    const title = "Yeoungho overflow";
    return (
        <BodyContainer>
            <PageContainer>
                <Title><Icon src="../sofLogo.png" />{title}</Title>
            </PageContainer>
        </BodyContainer>
    )
}