import styled from "@emotion/styled";
import { IconProps } from ".";

export const IconXMark: React.FC<IconProps> = ({ size, onClick }) => {
  return (
    <Container onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        width={size}
        height={size}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
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
