import { ReactNode, useState } from "react";
import Modal from "styled-react-modal";
import { IconXMark } from "./Icons";
import { fadeIn } from ".";

interface StyledModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
  children: ReactNode;
  width: string;
  height: string;
}

const StyledModal: React.FC<StyledModalProps> = ({
  isModalVisible = false,
  closeModal,
  children,
  width,
  height,
}) => {
  return (
    <CustomModalContainer
      isOpen={isModalVisible}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
      width={width}
      height={height}
    >
      <IconXMark size={24} onClick={closeModal} />
      {children}
    </CustomModalContainer>
  );
};

export default StyledModal;

const CustomModalContainer = Modal.styled`
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: ${(props: StyledModalProps) => props.width};
  height: ${(props: StyledModalProps) => props.height};
  border-radius: 20px;
  padding: 4rem 20px 4rem 2rem;
`;
