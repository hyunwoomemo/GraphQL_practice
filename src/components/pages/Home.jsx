import React from "react";
import styled from "@emotion/styled";
import { Sidebar } from "../organisms/Sidebar";
import Main from "../templates/Main";

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
