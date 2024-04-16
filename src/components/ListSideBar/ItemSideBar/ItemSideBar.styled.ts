import styled from "styled-components";


export const BoxTitle = styled.div`
  width: 220px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  gap: 11px;
  border-radius: 4px;
  background-color: #1f1f28;
`;
export const Title = styled.h3`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
`;

export const Arrow = styled.img<{ $isOpen: boolean }>`
  width: 14px;
  height: 14px;
  color: #7a7c83;
  cursor: pointer;
  transition: transform 250ms linear;
  transform: ${(props) => props?.$isOpen && "rotate(-180deg)"};
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  color: #5d6983;
`;
