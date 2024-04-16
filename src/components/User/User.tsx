import { FC } from "react";
import {
  BoxUser,
  UserIcon,
  UserInfo,
  UserName,
  UserStatus,
} from "./User.styled";
import setting from "/icons/setting.svg";

export const User: FC = () => {
  return (
    <BoxUser>
      <UserInfo>
        <UserIcon />
        <div>
          <UserName>User name</UserName>
          <UserStatus>User status</UserStatus>
        </div>
      </UserInfo>
      <button type="button">
        <img src={setting} alt="setting" />
      </button>
    </BoxUser>
  );
};
