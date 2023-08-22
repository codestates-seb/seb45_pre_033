import React from "react";
import { styled } from "styled-components";

const ReplyBody = styled.div`
    width: 1000px;
    padding: 0 30px;
    padding-bottom: 5px;
    border-bottom: 1px lightgray solid;
    gap: 5px;
    margin: 10px 0;
`
const ReplyContent=styled.p`
    font-size: 16px;
    margin-bottom: 5px;
`
const ReplyName = styled.span`
  color: #5a59a4;
`;
const ReplyAt = styled.span`
  color: #484848;
  font-size:12px;
`;

export default function Reply({ reply, isSameDay }) {
  return (
    <ReplyBody>
      <ReplyContent>{reply.content}</ReplyContent>
      <ReplyName>{reply.writer}</ReplyName>
      <ReplyAt>-{isSameDay(reply.createdAt)} 작성됨</ReplyAt>
    </ReplyBody>
  );
}