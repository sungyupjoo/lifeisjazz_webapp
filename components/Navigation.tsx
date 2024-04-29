"use client";

import styled from "@emotion/styled";
import { logo_white } from "../public/assets";
import colors from "../styles/theme";
import { RefObject, useState } from "react";
import Login from "./Login/Login";
import { Hamburger } from "./common/Icons/Hamburger";
import { useSession } from "next-auth/react";

interface NavigationProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  managerRef: RefObject<HTMLDivElement>;
  galleryRef: RefObject<HTMLDivElement>;
  scheduleRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  activeSection: string | undefined;
}

const Navigation: React.FC<NavigationProps> = ({
  homeRef,
  aboutRef,
  managerRef,
  galleryRef,
  scheduleRef,
  contactRef,
  activeSection,
}) => {
  // NavBar 오픈/클로즈
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    console.log("open");
  };

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    setIsNavOpen(false);
    if (ref.current) {
      window.scrollTo({
        top: ref.current?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavBar>
      <LogoContainer
        className={activeSection === "home" ? "active" : ""}
        onClick={() => scrollToRef(homeRef)}
      >
        <Logo alt="logo" src={logo_white} />
      </LogoContainer>
      <HamburgerContainer>
        <Hamburger onClick={toggleNav} size={30} />
      </HamburgerContainer>
      <NavItemsContainer className={isNavOpen ? "open" : "closed"}>
        <Anchor
          className={activeSection === "home" ? "active" : ""}
          onClick={() => scrollToRef(homeRef)}
        >
          홈
        </Anchor>
        <Anchor
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToRef(aboutRef)}
        >
          소개
        </Anchor>
        <Anchor
          className={activeSection === "manager" ? "active" : ""}
          onClick={() => scrollToRef(managerRef)}
        >
          운영진
        </Anchor>
        <Anchor
          className={activeSection === "gallery" ? "active" : ""}
          onClick={() => scrollToRef(galleryRef)}
        >
          사진첩
        </Anchor>
        <Anchor
          className={activeSection === "schedule" ? "active" : ""}
          onClick={() => scrollToRef(scheduleRef)}
        >
          일정
        </Anchor>
        <Anchor
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => scrollToRef(contactRef)}
        >
          연락
        </Anchor>
        {/* <Anchor
          className={activeSection === "personalInfo" ? "active" : ""}
          onClick={() => scrollToRef(personalInfoRef)}
        >
          설정
        </Anchor> */}
      </NavItemsContainer>
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled.section`
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 329px;
  height: 100%;
  background-color: ${colors.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  @media (max-width: 991px) {
    position: relative;
    top: 0px;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 156px;
  height: 156px;
  @media (max-width: 991px) {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 991px) {
    display: flex;
    margin-bottom: 0;
  }
`;

const NavItemsContainer = styled.section`
  display: flex;
  padding: 60px 0px;
  flex: 1.3;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: max-height 0.3s ease-in-out;
  @media (max-width: 991px) {
    display: flex;
    overflow: hidden;
    max-height: 0;
    // TODO: Overlay 깔고 그 위에서 해야 애니메이션 제대로 될듯
    &.open {
      position: fixed;
      display: flex;
      flex-direction: column;
      padding: 1rem 0 2rem 1.5rem;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.5rem;
      top: 80px;
      max-height: 500px;
      width: 100%;
      z-index: 300;
      background-color: ${colors.mainTint};
    }
    &.closed {
      max-height: 0;
    }
  }
`;

const Anchor = styled.a`
  font-family: semibold;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  &.active {
    color: ${colors.sub};
  }
  &:active {
    color: ${colors.sub};
  }
  &:hover {
    color: ${colors.sub};
    cursor: pointer;
  }
  &:visited {
  }
  &:focus {
    color: ${colors.sub};
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1.4rem;
  @media (max-width: 991px) {
    justify-content: flex-end;
    margin-right: 80px;
    margin-bottom: 0;
  }
`;
