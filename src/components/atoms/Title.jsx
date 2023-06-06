import styled from "@emotion/styled";

export const Title = ({ size = "small", text }) => {
  return <Base className={size}>{text}</Base>;
};

const Base = styled.h1`
  &.small {
    font-size: 16px;
    padding: 10px 0;
  }

  &.medium {
    font-size: 20px;
    padding: 1rem 0;
  }

  &.large {
    font-size: 24px;
    padding: 2rem 0;
  }
`;
