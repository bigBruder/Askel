import styled from "styled-components";

export const Main = styled.main`
  padding: 36px 0 16px;
  width: 100%;
  background-image: url("/icons/background.svg");
  background-repeat: no-repeat;
  background-position: right;
`;
export const BoxChat = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 664px;
  height: 100%;
`;
export const EventName = styled.p`
  margin-bottom: 16px;
  min-height: 43px;

  font-weight: 700;
  font-size: 22px;
  line-height: 91%;
  color: #fff;
  opacity: 0.9;
`;
export const BoxMessage = styled.div<{ $file?: boolean }>`
  padding: 12px 16px;
  background-color: rgba(3, 8, 18, 0.5);
  border: 1px solid #222d43;
  border-radius: 8px;
  width: fit-content;

  display: ${({ $file }) => $file && "flex"};
  flex-direction: ${({ $file }) => $file && "column"};
  gap: ${({ $file }) => $file && "10px"};
`;
export const Text = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: #fff;
  opacity: 0.87;
`;
export const LabelText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #fff;
`;
export const Input = styled.input`
  /* display: none;
  pointer-events: none; */
`;
