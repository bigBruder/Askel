import axios from "axios";
import { FC, useEffect, useState } from "react";
import { BoxList } from "./ListSideBar.styled";
import { ItemSideBar } from "./ItemSideBar/ItemSideBar";

export type data = {
  id: string;
  title: string;
  description: [];
};
export const ListSideBar: FC = () => {
  const [data, setData] = useState<data[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data, status } = await axios(
        "https://661cf1d7e7b95ad7fa6ba837.mockapi.io/test/sidebar"
      );
      if (status === 200) setData(data);
    })();
  }, []);

  return (
    <BoxList>
      {data && data.map((el) => <ItemSideBar key={el.id} item={el} />)}
    </BoxList>
  );
};
