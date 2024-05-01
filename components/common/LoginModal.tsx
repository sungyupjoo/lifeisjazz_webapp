import styled from "@emotion/styled";
import { signIn } from "next-auth/react";
import { StyledModal } from ".";

interface LoginModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isModalVisible,
  closeModal,
}) => {
  const loginHandler = () => {
    signIn("kakao");
    closeModal();
  };

  return (
    <StyledModal
      isModalVisible={isModalVisible}
      closeModal={closeModal}
      width={"20rem"}
      height={"15rem"}
    >
      <ModalTitle>로그인</ModalTitle>
      <ButtonContainer onClick={loginHandler}>
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/life-is-jazz-web-app.appspot.com/o/Src%2Fkakao_login_medium_narrow%20(1).png?alt=media&token=e108cf5f-b0a4-4ed0-a87c-67ede8259107"
          }
          width={"150px"}
        />
      </ButtonContainer>
    </StyledModal>
  );
};

export default LoginModal;

const ModalTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
