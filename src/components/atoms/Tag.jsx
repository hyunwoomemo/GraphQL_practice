import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { majorCategoryState, middleCategoryState } from "../../recoil/atoms/category";
import { css } from "@emotion/react";

export const Tag = ({ text, event = undefined }) => {
  const [majorCategory, setMajorCategory] = useRecoilState(majorCategoryState);
  const [middleCategory, setmiddleCategory] = useRecoilState(middleCategoryState);
  const handleClick = () => {
    if (event) {
      setMajorCategory("all");
      setmiddleCategory("all");
      event(text);
      console.log(event);
    }
  };
  return (
    <Base onClick={handleClick} majorActive={text === majorCategory} middleActive={text === middleCategory}>
      {text}
    </Base>
  );
};

const Base = styled.div`
  border-radius: 20px;
  padding: 5px 10px;
  border: 1px solid gray;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    &::before {
      transform: translateX(0);
    }
  }

  &:before {
    content: "";
    transition: 0.3s;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(-110%);
    height: 100%;
    background-color: black;
    z-index: -1;
  }

  ${({ majorActive }) =>
    majorActive
      ? css`
          background-color: black;
          color: #fff;
        `
      : undefined}

  ${({ middleActive }) =>
    middleActive
      ? css`
          background-color: black;
          color: #fff;
        `
      : undefined}
`;
