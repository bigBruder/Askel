import { FC } from "react";
import logo from "/icons/logo.svg";
import { BoxLogo, ImgLogo, TextLogo } from "./Logo.styled";
export const Logo: FC = () => {
  return (
    <BoxLogo>
      <ImgLogo src={logo} alt="Askel Logo" />
      <TextLogo>askel.ai</TextLogo>
    </BoxLogo>
  );
};
