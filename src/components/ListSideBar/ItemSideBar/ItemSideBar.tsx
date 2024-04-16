import { FC } from "react";
import { Arrow, BoxTitle, Text, Title } from "./ItemSideBar.styled";
import arrow from "/icons/arrow.svg";
import { data } from "../ListSideBar";
import { useIsOpen } from "../../../hooks/useIsOpen";
import { nanoid } from "nanoid";
import { motion, AnimatePresence } from "framer-motion";

type ItemProps = {
  item: data;
};
export const ItemSideBar: FC<ItemProps> = ({ item }) => {
  const { isOpen, toggleIsOpen } = useIsOpen();
  return (
    <>
      <li>
        <BoxTitle>
          <Title>{item.title}</Title>
          <Arrow
            onClick={toggleIsOpen}
            $isOpen={isOpen}
            alt="arrow"
            src={arrow}
          />
        </BoxTitle>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0, margin: "0" }}
              animate={{ height: "auto", opacity: 1, margin: "8px 0" }}
              exit={{ height: 0, opacity: 0, margin: "0" }}
              style={{
                padding: "0 16px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {item.description.map((el) => (
                <li key={nanoid()}>
                  <Text>{el}</Text>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};
