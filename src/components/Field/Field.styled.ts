import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LuPlus } from "react-icons/lu";

import styled from "styled-components";

export const BoxField = styled.div`
  margin-top: auto;
  margin-left: 7px;
`;

export const Input = styled.textarea`
  width: 619px;
  min-height: 60px;
  padding: 8px 16px;

  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: #fff;

  background-color: rgba(18, 18, 26, 0.9);
  border: 2px solid #242c3b;
  border-radius: 8px;
`;
export const BtnPlus = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(18, 18, 26, 0.9);
  border: 2px solid #242c3b;
  border-radius: 8px;
`;
export const PlusIcon = styled(LuPlus)`
  color: #128c7e;
`;

export const BoxList = styled.div`
  max-width: 650px;
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const List = styled.ul`
  display: flex;
  gap: 6px;
`;
export const Item = styled.li`
  max-width: 78px;
  padding: 0 10px;
  background-color: rgba(18, 18, 26, 0.9);
  border: 1px solid #263149;
  border-radius: 8px;
`;
export const Text = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: #5f6a85;
`;
export const Button = styled.button``;
export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  color: #fff;
  width: 24px;
  height: 24px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  color: #fff;
  width: 24px;
  height: 24px;
`;
