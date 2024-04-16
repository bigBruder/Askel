import { FC } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BoxField,
  BoxList,
  BtnPlus,
  Button,
  Input,
  Item,
  List,
  PlusIcon,
  Text,
} from "./Field.styled";

export const Field: FC = () => {
  return (
    <BoxField>
      <div style={{ width: 650, display: "flex", gap: 8, marginBottom: 10 }}>
        <Input />
        <BtnPlus type="button">
          <PlusIcon />
        </BtnPlus>
      </div>
      <BoxList>
        <Button type="button">
          <ArrowLeft />
        </Button>
        <List>
          <Item>
            <Text>Suggestion</Text>
          </Item>
          <Item>
            <Text>Suggestion</Text>
          </Item>
          <Item>
            <Text>Suggestion</Text>
          </Item>
          <Item>
            <Text>Suggestion</Text>
          </Item>
          <Item>
            <Text>Suggestion</Text>
          </Item>
          <Item>
            <Text>Suggestion</Text>
          </Item>
          <Item>
            <Text>Suggestion</Text>
          </Item>
        </List>
        <Button type="button">
          <ArrowRight />
        </Button>
      </BoxList>
    </BoxField>
  );
};
