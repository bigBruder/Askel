import { FC } from "react";
import {
  BoxChat,
  BoxMessage,
  EventName,
  Input,
  LabelText,
  Main,
  Text,
} from "./Chat.styled";
import { Field } from "../Field/Field";

export const Chat: FC = () => {
  return (
    <Main>
      <BoxChat>
        <EventName>Event name</EventName>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <BoxMessage>
            <Text>
              Happy to help - lets walk the process through together once and we
              should be good to go.
            </Text>
          </BoxMessage>
          <BoxMessage>
            <Text>
              Happy to help - lets walk the process through together once and we
              should be good to go.
            </Text>
          </BoxMessage>
          <BoxMessage>
            <Text>
              Happy to help - lets walk the process through together once and we
              should be good to go.
            </Text>
          </BoxMessage>
          <BoxMessage>
            <Text>
              Happy to help - lets walk the process through together once and we
              should be good to go.
            </Text>
          </BoxMessage>
          <BoxMessage $file={true}>
            <Text>
              Please select the sales spreadsheet from your Google drive
            </Text>
            <label>
              <LabelText></LabelText>
              <Input type="file" name="file" id="file" />
            </label>
          </BoxMessage>
        </div>
        <Field />
      </BoxChat>
    </Main>
  );
};
