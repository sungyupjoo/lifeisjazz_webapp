import styled from "@emotion/styled";
import colors from "../commons/styles/theme";
import { Button, StyledModal, fadeIn } from "./common";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const clickHandler = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const loginHandler = () => {
    // const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
    closeModal();

    // const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const AUTHORIZE_CODE = new URLSearchParams(window.location.search).get(
      "code"
    );
    // window.location.href = link;
    console.log(AUTHORIZE_CODE);
  };

  const { user } = useAuth();
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

const SubText = styled.p`
  margin-bottom: 0.3rem;
`;

const InputBox = styled.input`
  margin-bottom: 1rem;
  width: 100%;
  height: 2rem;
  border-style: solid;
  border-radius: 16px;
  border-color: ${colors.main};
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
