import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 160px;
  background-color: white;
  border-right: 2px solid lightgray;
  justify-content: center;
  display: flex;
  padding-top: 56px;
  box-sizing: border-box;
  height: 100%;
`;

const ListContainer = styled.ol`
  display: flex;
  list-style: none;
  flex-direction: column;
  width: 160px;
  padding: 150px 0;
  position: fixed;
`;

const List = styled.li`
  font-weight: bold;
  padding: 15px 0;
  width: 160px;
  justify-content: center;
  display: flex;
  font-size: 20px;

`;

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: "active"
})`
  text-decoration: none;
  color: gray;
  font-weight: bold;
  &.active {
    background-color: #5a59a4;
    color: white;
    font-weight: bolder;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-right: 4px solid orange;
  }
  &:not(.active):hover {
    color: black;
  }
`;

export default function Sidebar () {

  return (
    <SidebarContainer>
       <ListContainer>
          <StyledNavLink to='/question' activeClassName ='active'>
            <List>질문</List>
          </StyledNavLink>
          <StyledNavLink to='/users' activeClassName ='active'>
            <List>유저</List>
          </StyledNavLink>
          <StyledNavLink to='/groups' activeClassName ='active'>
            <List>그룹</List>
          </StyledNavLink>
       </ListContainer>
    </SidebarContainer>
  )
}