import styled from "@emotion/styled";
import colors from "../commons/styles/theme";
import { Button, fadeIn } from "./common";
import Modal from "styled-react-modal";
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

  const { user } = useAuth();
  console.log(user);
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
          isOpen={isModalVisible}
          onBackgroundClick={closeModal}
          onEscapeKeydown={closeModal}
        >
          <ModalTitle>로그인</ModalTitle>
          <SubText>메일주소</SubText>
          <InputBox />
          <SubText>비밀번호</SubText>
          <InputBox />
          <ButtonContainer>
            <Button
              backgroundColor={colors.sub}
              text="로그인"
              href=""
              onClick={closeModal}
            />
          </ButtonContainer>
        </StyledModal>
      )}
    </>
  );
};
export default Login;

const StyledModal = Modal.styled`
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 25rem;
  height: 20rem;
  border-radius: 20px;
  padding: 2rem;
`;

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
