import { IconProps } from ".";
import styled from "@emotion/styled";

export const IconArrowRight: React.FC<IconProps> = ({ size, onClick }) => {
  return (
    <Container>
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
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 0.4rem;
`;
