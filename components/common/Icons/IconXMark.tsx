import styled from "@emotion/styled";
import { IconProps } from ".";

interface XMarkProps extends IconProps {
  position?: "absolute" | "relative";
}

export const IconXMark: React.FC<XMarkProps> = ({
  size,
  onClick,
  position = "absolute",
}) => {
  return (
    <Container onClick={onClick} position={position}>
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

const Container = styled.div<{ position: "absolute" | "relative" }>`
  position: ${(props) => props.position};
  top: ${(props) => (props.position === "absolute" ? "20px" : "0")};
  right: ${(props) => (props.position === "absolute" ? "20px" : "0")};
  cursor: pointer;
`;
