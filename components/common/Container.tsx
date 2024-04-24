import styled from "@emotion/styled";
import colors from "../../styles/theme";

export const Container = styled.section<{
  innerPadding?: boolean;
  backgroundGray?: boolean;
}>`
  position: relative;
  left: 329px;
  width: calc(100% - 329px);
  height: 100vh;
  flex: 1;
  padding: ${(props) => (props.innerPadding ? "64px 40px" : "")};
  background-color: ${(props) =>
    props.backgroundGray ? colors.backgroundGray : "white"};
  border-style: solid;
  border-bottom-width: 1px;
  border-color: ${colors.borderGray};
  @media (max-width: 991px) {
    left: 0px;
    width: 100%;
    height: auto;
  }
`;
