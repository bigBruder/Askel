import { FC } from "react";
import logo from "/icons/sidebar-logo.svg";
import { BoxLogo, ImgLogo, TextLogo } from "./Logo.styled";
export const SidebarLogo: FC = () => {
  return (
    <BoxLogo>
      <ImgLogo src={logo} alt="Askel Logo" />
      <TextLogo>askel.ai</TextLogo>
    </BoxLogo>
  );
};
