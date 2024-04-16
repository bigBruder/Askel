import { FC } from "react";
import { SideBar } from "../components/SideBar/SideBar";
import { Chat } from "../components/Chat/Chat";

const DashBoardPage: FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Chat />
    </div>
  );
};

export default DashBoardPage;
