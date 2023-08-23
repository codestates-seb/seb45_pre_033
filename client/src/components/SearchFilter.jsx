import React from 'react';
import styled from "styled-components";

export default function Searchfilter ({ toggleState, setToggleState }) {
    
    const handleToggle = () => {
        setToggleState((prevState) => (prevState + 1));
        if (toggleState === 2) {
          setToggleState(0);
        }
      };
    
    const toggleArr = ['제목','작성자','태그'];

    const Button = styled.button`
      background-color: white;
      color: #43337d;
      border-radius: 8px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      height: 30px;
      width: 50px;
      justify-content: center;
      border: none;
      padding-top: 4px;
    `;

      return (
        <Button onClick={handleToggle}>{toggleArr[toggleState]}</Button>
      )
}