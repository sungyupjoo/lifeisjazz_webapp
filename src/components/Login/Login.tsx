"use client";
import styled from "@emotion/styled";
import colors from "../../commons/styles/theme";
import { Button, StyledModal } from "../common";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { logout } from "./loginFunctions";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userEmail, setUserEmail] = useState<string | undefined | null>("");
  useEffect(() => {
    console.log("userEmail: ", userEmail);
    setUserEmail(auth.currentUser?.email);
  }, [auth.currentUser]);
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
  const logOutHandler = () => {
    userEmail && logout(userEmail);
  };

  return (
    <>
      <Button
        backgroundColor={colors.sub}
        text={userEmail ? "로그아웃" : "로그인"}
        href=""
        onClick={!userEmail ? clickHandler : logOutHandler}
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
