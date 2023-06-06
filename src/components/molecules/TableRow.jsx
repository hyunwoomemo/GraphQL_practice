import styled from "@emotion/styled";
import React from "react";

const TableRow = ({ children }) => {
  return <Base>{children}</Base>;
};

const Base = styled.tr`
  padding: 1rem;
`;

export default TableRow;
