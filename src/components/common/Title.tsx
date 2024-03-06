import styled from "@emotion/styled";
import colors from "../../commons/styles/theme";

interface TitleProps {
  titleText: string;
  subTitle: string;
}

export const Title: React.FC<TitleProps> = ({ titleText, subTitle }) => (
  <TitleContainer>
    <TitleText>{titleText}</TitleText>
    <SubTitle>{subTitle}</SubTitle>
  </TitleContainer>
);

const TitleContainer = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
`;

const TitleText = styled.h2`
  align-self: center;
  justify-self: center;
  margin-bottom: 1.3rem;
`;

const SubTitle = styled.h4`
  color: ${colors.gray};
  font-size: 1.15rem;
`;
