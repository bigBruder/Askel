import { FC } from "react";
import loading from "/icons/loading.svg";
import { LoaderBox } from "./Loader.styled";
type LoaderProps = {
  width: string;
  height: string;
};
export const Loader: FC<LoaderProps> = ({ width, height }) => {
  return (
    <LoaderBox width={width} height={height} src={loading} alt="loading" />
  );
};
