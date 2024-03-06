import styled from "@emotion/styled";

export const Container = styled.section<{ innerPadding?: boolean }>`
  position: relative;
  left: 329px;
  width: calc(100% - 329px);
  height: 100vh;
  flex: 1;
  padding: ${(props) => (props.innerPadding ? "64px 40px" : "")};
`;
