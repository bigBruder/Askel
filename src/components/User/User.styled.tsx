import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";

export const BoxUser = styled.div`
  margin-left: 6px;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const UserIcon = styled(IoPersonCircleOutline)`
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #f2f3f5;
`;
export const UserStatus = styled.span`
  font-weight: 400;
  font-size: 10px;
  color: #5d6983;
`;
