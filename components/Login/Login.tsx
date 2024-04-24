"use client";
import styled from "@emotion/styled";
import { Button, StyledModal } from "../common";
import { useState, useEffect } from "react";
import colors from "../../styles/theme";
import { signIn, useSession, signOut } from "next-auth/react";
import { UserProps } from "../common/types";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState<UserProps>();
  const clickHandler = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const loginHandler = () => {
    // TODO: import.meta.env로 대체할 것

    // const REDIRECT_URI = "http://localhost:3000/auth";
    // window.Kakao.Auth.authorize({
    //   redirectUri: REDIRECT_URI,
    // });
    signIn("kakao");
    closeModal();
  };

  const { data: session, status } = useSession();

  useEffect(() => {
    setUser(session?.user as UserProps);
  }, [session]);

  const logOutHandler = () => {
    signOut();
  };

  return (
    <>
      <Button
        backgroundColor={colors.sub}
        text={user?.name ? "로그아웃" : "로그인"}
        logoUrl=""
        href=""
        onClick={!user?.email ? clickHandler : logOutHandler}
      />
      {isModalVisible && (
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
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
