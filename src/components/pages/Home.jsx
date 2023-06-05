import React from "react";
import styled from "@emotion/styled";
import Main from "../organisms/Main";
import { Sidebar } from "../organisms/organism";

const Home = () => {
  return (
    <Base>
      <Sidebar />
      <Main />
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  gap: 1rem;
`;

export default Home;
