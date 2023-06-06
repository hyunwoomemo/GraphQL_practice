import styled from "@emotion/styled";

export const Button = ({ size = "small", text }) => {
  return <Base className={size}>{text}</Base>;
};

const Base = styled.h1`
  &.small {
    font-size: 16px;
  }

  &.medium {
    font-size: 20px;
  }

  &.large {
    font-size: 24px;
  }
`;
