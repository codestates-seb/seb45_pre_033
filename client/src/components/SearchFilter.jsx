import React, { useState } from 'react';
import styled from "styled-components";

export default function Searchfilter () {
    const [toggleState, setToggleState] = useState(0);
    
    const handleToggle = () => {
        setToggleState((prevState) => (prevState + 1));
        if (toggleState === 2) {
          setToggleState(0);
        }
      };
    
    const toggleArr = ['제목','작성자','태그'];

    const Button = styled.button`
        background-color: white;
        color: #43337D;
        border-radius: 8px;
        display: flex;
        align-items: center;
        font-weight: bold;
        height: 30px;
        width: 60px;
        justify-content: center;
        padding: 0 8px;
    `;

      return (
        <Button onClick={handleToggle}>{toggleArr[toggleState]}</Button>
      )
}