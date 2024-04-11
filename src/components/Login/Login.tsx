import styled from "@emotion/styled";
import colors from "../../commons/styles/theme";
import { Button, StyledModal, fadeIn } from "../common";
import { useState } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const clickHandler = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const loginHandler = () => {
    // TODO: import.meta.env로 대체할 것
    // const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;

    const REDIRECT_URI = "http://localhost:3000/auth";
    window.Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
    });

    closeModal();
  };

  return (
    <>
      <Button
        backgroundColor={colors.sub}
        text="로그인"
        href=""
        onClick={clickHandler}
      />
      {isModalVisible && (
        <StyledModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          width={"25rem"}
          height={"20rem"}
        >
          <ModalTitle>로그인</ModalTitle>
          <ButtonContainer>
            <Button
              backgroundColor={colors.sub}
              text="카카오로 로그인"
              href=""
              onClick={loginHandler}
            />
          </ButtonContainer>
        </StyledModal>
      )}
    </>
  );
};
export default Login;

const ModalTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
