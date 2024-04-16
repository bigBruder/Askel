import { FC } from "react";
import { SidebarLogo } from "../Logo/SidebarLogo";
import { ListSideBar } from "../ListSideBar/ListSideBar";
import { User } from "../User/User";
import {
  ArrowBack,
  BoxInput,
  BoxSideBar,
  BtnBack,
  IconSearch,
  Input,
} from "./SideBar.styled";

export const SideBar: FC = () => {
  return (
    <BoxSideBar>
      <SidebarLogo />
      <BtnBack type="button">
        <ArrowBack />
        <span>Back</span>
      </BtnBack>
      <BoxInput>
        <Input type="text" name="search" placeholder="Search" />
        <IconSearch />
      </BoxInput>
      <ListSideBar />
      <User />
    </BoxSideBar>
  );
};
