import styled from "@emotion/styled";
import colors from "../../styles/theme";
import Link from "next/link";

interface ButtonProps {
  text: string;
  logoUrl?: string;
  backgroundColor: string;
  fontColor?: string;
  href?: string;
  link?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  logoUrl,
  backgroundColor,
  fontColor = "white",
  href,
  link = false,
  onClick,
}) => {
  return (
    <>
      <ButtonContainer backgroundColor={backgroundColor}>
        {logoUrl && <LogoImage src={logoUrl} />}
        {link ? (
          <Link
            href={"/JamPortal"}
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "regular",
            }}
          >
            {text}
          </Link>
        ) : (
          <ButtonAnchor
            href={href}
            fontColor={fontColor}
            onClick={(e) => {
              if (onClick) {
                e.preventDefault();
                onClick();
              }
              return;
            }}
          >
            {text}
          </ButtonAnchor>
        )}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  word-break: keep-all;
  text-align: center;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
  display: inline-block;
  cursor: pointer;
  padding: 8px 20px;
  border: 2px solid ${(props) => props.backgroundColor};
  border-radius: 4px;
  & > * {
    vertical-align: middle;
  }
  &:hover {
    background-color: ${(props) =>
      props.backgroundColor === colors.main
        ? colors.mainShade
        : colors.subShade};
    border-color: ${(props) =>
      props.backgroundColor === colors.main
        ? colors.mainShade
        : colors.subShade};
  }
`;

const ButtonAnchor = styled.a<{ fontColor: string }>`
  text-decoration: none;
  font-family: regular;
  color: ${(props) => props.fontColor};
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
