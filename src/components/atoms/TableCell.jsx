import styled from "@emotion/styled";
import React from "react";

const TableCell = ({ children }) => {
  return <Base>{children}</Base>;
};

const Base = styled.td`
  border-bottom: 2px solid #f4f4f4;
  border-right: 2px solid #f4f4f4;
  padding: 10px;

  &:first-child {
    border-left: 2px solid #f4f4f4;
  }
`;

export default TableCell;
