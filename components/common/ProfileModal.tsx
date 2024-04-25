import styled from "@emotion/styled";
import React from "react";
import { Button, StyledModal } from ".";
import { UserProps } from "./types";
import colors from "../../styles/theme";
import CustomInput from "./Input";

interface ProfileModalProps {
  isProfileModalVisible: boolean;
  closeProfileModal: () => void;
  user: UserProps;
  logoutHandler: () => void;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isProfileModalVisible,
  closeProfileModal,
  user,
  logoutHandler,
  handleSubmit,
}) => {
  const { name, image } = user;
  return (
    <StyledModal
      isModalVisible={isProfileModalVisible}
      width="25rem"
      height="20rem"
      closeModal={closeProfileModal}
    >
      <Title>내 프로필</Title>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="nickname">닉네임</Label>
        <CustomInput
          id="nickname"
          name="nickname"
          type="text"
          required
          defaultValue={name}
        />
        <Label htmlFor="profileImage">사진</Label>
        <img
          src={image}
          height="30px"
          width="30px"
          style={{ borderRadius: "10px" }}
        />
      </FormContainer>
      <ButtonContainer>
        <Button text="변경사항 저장" backgroundColor={colors.main} />
        <Button
          text="로그아웃"
          backgroundColor={colors.sub}
          onClick={logoutHandler}
        />
      </ButtonContainer>
    </StyledModal>
  );
};

export default ProfileModal;

const Title = styled.h3`
  text-align: center;
`;

const FormContainer = styled.form`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  row-gap: 1rem;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  font-family: semibold;
`;
