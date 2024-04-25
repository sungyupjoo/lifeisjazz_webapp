import styled from "@emotion/styled";
import React from "react";
import colors from "../../styles/theme";
import { UserProps } from "./types";

interface ProfileProps {
  user: UserProps;
  onClick: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onClick }) => {
  const { name, image } = user;
  return (
    <ProfileContainer onClick={onClick}>
      <FlexWrapper>
        <ProfileImage src={image} />
        <Name>{name}</Name>
      </FlexWrapper>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: inline-block;
  word-break: keep-all;
  cursor: pointer;
  max-width: 8rem;
  background-color: ${colors.mainBrightTint};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${colors.mainShade};
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ProfileImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 0.5rem;
`;

const Name = styled.h4`
  font-size: 1rem;
  color: #edeff2;
  font-family: regular;
`;
