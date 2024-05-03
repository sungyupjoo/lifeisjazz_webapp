import React from "react";
import { StyledModal } from "./common";

interface CancelSongModalProps {
  isVisible: boolean;
  closeHandler: () => void;
}

const CancelSongModal: React.FC<CancelSongModalProps> = ({
  isVisible,
  closeHandler,
}) => {
  return (
    <StyledModal
      isModalVisible={isVisible}
      closeModal={closeHandler}
      height="20rem"
      width="30rem"
    >
      CancelSongModal
    </StyledModal>
  );
};

export default CancelSongModal;
