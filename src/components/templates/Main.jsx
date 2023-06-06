import styled from "@emotion/styled";
import React from "react";
import Table from "../organisms/Table";
import { Title } from "../atoms/Title";

const Main = () => {
  return (
    <Base>
      <Title size="medium" text="Main" />
      <Table />
    </Base>
  );
};

const Base = styled.div`
  padding: 1rem;
  width: 100%;
`;

export default Main;
