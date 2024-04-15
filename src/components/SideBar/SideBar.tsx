import { FC } from "react";
import { Logo } from "../Logo/Logo";
import {
  ArrowBack,
  BoxInput,
  BoxSideBar,
  BtnBack,
  IconSearch,
  Input,
} from "./SideBar.styled";
import { ListSideBar } from "../ListSideBar/ListSideBar";

export const SideBar: FC = () => {
  return (
    <BoxSideBar>
      <Logo />
      <BtnBack type="button">
        <ArrowBack />
        <span>Back</span>
      </BtnBack>
      <BoxInput>
        <Input type="text" name="search" placeholder="Search" />
        <IconSearch />
      </BoxInput>
      <ListSideBar />
    </BoxSideBar>
  );
};
