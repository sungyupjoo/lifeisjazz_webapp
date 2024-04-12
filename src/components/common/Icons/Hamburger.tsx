import styled from "@emotion/styled";
import { IconProps } from ".";

export const Hamburger: React.FC<IconProps> = ({ size, onClick }) => {
  return (
    <Container onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18L20 18"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
