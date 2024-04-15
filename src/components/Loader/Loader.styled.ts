import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
    transform-origin: center;
  }
`;

export const LoaderBox = styled.img`
  animation: 1s ${rotate} linear infinite;
`;
