const { default: styled } = require("@emotion/styled");

export const TitleStyle = styled.h1`
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
`

export const ButtonStyle = styled.h1`
  &.small {
    font-size: 16px;
  }

  &.medium {
    font-size: 20px;
  }

  &.large {
    font-size: 24px;
  }
`

export const TagStyle = styled.div`
border-radius: 20px;
padding: 5px 10px;
border: 1px solid gray;
position: relative;
overflow: hidden;
cursor: pointer;
transition: all .3s;

&:hover {
  color: #fff;

  &::before {
    width: 100%;
  }
}

&:before {
  content: '';
  transition: .3s;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: gray;
  z-index: -1;
}
`

export const BoxStyle = styled.div`

`

export const ContainerStyle = styled.div``