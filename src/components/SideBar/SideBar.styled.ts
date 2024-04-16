import { IoSearch } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import styled from "styled-components";

export const BoxSideBar = styled.aside`
  width: 250px;
  min-height: 100vh;
  padding: 21px 14px 16px 16px;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    180deg,
    rgba(18, 18, 26, 0.9) 0%,
    rgba(18, 18, 26, 0.9) 100%
  );
`;

export const BtnBack = styled.button`
  margin-left: 22px;
  margin-bottom: 14px;

  display: flex;
  align-items: center;
  gap: 25px;

  font-size: 12px;
  color: #fff;
`;
export const ArrowBack = styled(MdArrowBack)`
  width: 20px;
  height: 20px;

  color: #007aff;
`;

export const BoxInput = styled.div`
  position: relative;
  margin-bottom: 17px;
`;
export const Input = styled.input`
  width: 202px;
  height: 28px;
  margin-left: 8px;
  padding: 0 20px 0 8px;

  color: #fff;
  background-color: #1f1f28;
  border: 1px solid #242c3b;
  border-radius: 3px;
`;
export const IconSearch = styled(IoSearch)`
  position: absolute;
  top: 6px;
  right: 20px;
  color: rgba(182, 186, 192, 0.6);
  cursor: pointer;
`;
