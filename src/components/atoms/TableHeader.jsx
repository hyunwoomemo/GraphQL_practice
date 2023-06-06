import styled from "@emotion/styled";
import React from "react";

const TableHeader = ({ children }) => {
  return <Base>{children}</Base>;
};

const Base = styled.th`
  color: gray;
  border-top: 2px solid #f4f4f4;
  border-bottom: 2px solid #f4f4f4;
  border-right: 2px solid #f4f4f4;
  padding: 10px;
  position: sticky;
  top: 0;
  background-color: #f9f9f9; /* 헤더 배경색 */

  &:first-child {
    border-left: 2px solid #f4f4f4;
  }
`;

export default TableHeader;
