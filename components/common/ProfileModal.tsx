import styled from "@emotion/styled";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import React, { useCallback, useState } from "react";
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
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const onDrop = useCallback(
    <T extends File>(
      acceptedFiles: T[],
      fileRejections: FileRejection[],
      event: DropEvent
    ) => {
      const file = new FileReader();
      file.onload = function () {
        setPreview(file.result);
      };
      file.readAsDataURL(acceptedFiles[0]);
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledModal
      isModalVisible={isProfileModalVisible}
      width="25rem"
      height="30rem"
      closeModal={closeProfileModal}
    >
      <Title>내 프로필</Title>

      <FormContainer onSubmit={handleSubmit}>
        <Container>
          <LabelA htmlFor="nickname">닉네임</LabelA>
          <GridContentA>
            <CustomInput
              id="nickname"
              name="nickname"
              type="text"
              required
              defaultValue={name}
            />
          </GridContentA>
          <LabelB htmlFor="profileImage">사진</LabelB>
          <GridContentB>
            <img
              src={(typeof preview === "string" && preview) || image}
              height="60px"
              width="60px"
              style={{ borderRadius: "15px" }}
            />
          </GridContentB>
          <FileSearcher {...getRootProps()}>
            <input {...getInputProps()} id="profileImage" name="profileImage" />
            {isDragActive ? (
              <p>파일을 여기에 드랍하세요</p>
            ) : (
              <p>{`여기를 눌러 파일을 선택하거나${`\n`} 끌어서 드랍하세요`}</p>
            )}
          </FileSearcher>
        </Container>
        <ButtonContainer>
          <CustomButton type="submit">변경사항 저장</CustomButton>
          <Button
            text="로그아웃"
            backgroundColor={colors.sub}
            onClick={logoutHandler}
          />
        </ButtonContainer>
      </FormContainer>
    </StyledModal>
  );
};

export default ProfileModal;

const Title = styled.h3`
  text-align: center;
`;
const FormContainer = styled.form``;

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  grid-template-areas:
    "titleA contentA"
    "titleB contentB"
    "footer footer";
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

const LabelA = styled(Label)`
  grid-area: titleA;
`;

const LabelB = styled(Label)`
  grid-area: titleB;
`;

const GridContent = styled.div``;

const GridContentA = styled(GridContent)`
  grid-area: contentA;
`;

const GridContentB = styled(GridContent)`
  grid-area: contentB;
`;

const FileSearcher = styled.div`
  grid-area: footer;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${colors.borderGray};
  border-style: dashed;
  background-color: #fafafa;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const CustomButton = styled.button`
  font-family: regular;
  font-size: 1rem;
  color: white;
  background-color: ${colors.main};
  border-radius: 4px;
  padding: 8px 20px;
  border: 2px solid ${colors.main};
  cursor: pointer;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
  &:hover {
    background-color: ${colors.mainShade};
  }
`;
