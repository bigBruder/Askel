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
      <BoxTitle>
        <Title>{item.title}</Title>
        <Arrow onClick={toggleIsOpen} $isOpen={isOpen} alt="arrow" src={arrow} />
      </BoxTitle>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {item.description.map((el) => (
              <Text key={nanoid()}>{el}</Text>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
