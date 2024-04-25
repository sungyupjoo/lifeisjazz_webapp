"use client";
import styled from "@emotion/styled";
import { Button, StyledModal } from "../common";
import { useState, useEffect } from "react";
import colors from "../../styles/theme";
import { signIn, useSession, signOut } from "next-auth/react";
import { UserProps } from "../common/types";
import Profile from "../common/Profile";
import ProfileModal from "../common/ProfileModal";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);
  const { data: session, status } = useSession();

  const clickHandler = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const loginHandler = () => {
    signIn("kakao");
    closeModal();
  };

  useEffect(() => {
    const userSettingHandler = async () => {
      if (session?.user?.email) {
        try {
          const docRef = doc(db, "members", session?.user?.email);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log(docSnap.data());
          } else {
            if (user) {
              const { email, image, name } = user;
              setDoc(docRef, { email, image, name, isManager: false });
            }
          }
          setUser(docSnap.data() as UserProps);
        } catch (error) {
          console.warn(error);
        }
      }
    };
    userSettingHandler();
  }, [session]);

  const logOutHandler = () => {
    setUser(null);
    signOut();
    setIsProfileModalVisible(false);
  };

  const openProfileModal = () => {
    setIsProfileModalVisible(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalVisible(false);
  };

  const saveProfileHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data: UserProps = {
      name: fd.get("nickname") as string,
      email: user?.email as string,
      image: fd.get("profileImage") as string,
    };
    console.log(data, "새 데이터");
    // TODO: firebase의 회원 정보와 연동할 것
    // try {
    //   const docRef = await setDoc(
    //     doc(db, "jamday", startOfDay(selectedDate).toDateString()),
    //     {
    //       data: [...requestedSongs, data],
    //     },
    //     { merge: true }
    //   );

    //   const jamdayDocRef = await setDoc(
    //     doc(
    //       db,
    //       "jamday",
    //       `${selectedDate.getFullYear()} ${selectedDate.getMonth() + 1}`
    //     ),
    //     { jamday: [...jamDayDate, selectedDate.toDateString()] },
    //     { merge: true }
    //   );
    // } catch (e) {
    //   console.error("에러메시지", e);
    // }
    setIsProfileModalVisible(false);
  };

  return (
    <>
      {!user?.name ? (
        <Button
          backgroundColor={colors.sub}
          text={"로그인"}
          logoUrl=""
          href=""
          onClick={clickHandler}
        />
      ) : (
        <Profile onClick={openProfileModal} user={user} />
      )}

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
      {isProfileModalVisible && user && (
        <ProfileModal
          isProfileModalVisible={isProfileModalVisible}
          closeProfileModal={closeProfileModal}
          user={user}
          logoutHandler={logOutHandler}
          handleSubmit={saveProfileHandler}
        />
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
