import React from "react";
import { styled } from "styled-components";
const TagBody = styled.div`
    height: 30px;
    font-size: 16px;
    background-color: #5a59a4;
    border: none;
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;
    margin: 5px;
    color: white;
    font-weight: bold;
`
const DeleteButton = styled.button`
    font-size: 14px;
    border: none;
    background-color: transparent;
    margin-left: 5px;
    color: white;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`
export default function QuestionTag({tag,idx,handleTagDelete}) {
    return (
        <TagBody>{tag}<DeleteButton onClick={()=>handleTagDelete(idx)} >x</DeleteButton></TagBody>
    )
}