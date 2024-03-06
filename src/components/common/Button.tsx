import styled from "@emotion/styled";
import colors from "../../commons/styles/theme";

interface ButtonProps {
  text: string;
  logoUrl: string;
  backgroundColor: string;
  href: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  logoUrl,
  backgroundColor,
  href,
}) => {
  return (
    <>
      <ButtonContainer backgroundColor={backgroundColor} href={href}>
        <LogoImage src={logoUrl} />
        {text}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.a<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  margin-right: 5px;
  margin-left: 5px;
  display: inline-block;
  padding: 11px 20px;
  border: 2px solid ${colors.main};
  border-radius: 4px;
  text-decoration: none;
  font-family: regular;
  color: white;
  & > * {
    vertical-align: middle;
  }
`;

const LogoImage = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;
