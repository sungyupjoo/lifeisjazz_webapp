import styled from "@emotion/styled";
import { logo_white } from "../assets";
import colors from "../commons/styles/theme";
import { RefObject, SetStateAction, useState } from "react";

interface NavigationProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  galleryRef: RefObject<HTMLDivElement>;
  scheduleRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({
  homeRef,
  aboutRef,
  galleryRef,
  scheduleRef,
  contactRef,
  activeSection,
}) => {
  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
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
      <NavItemsContainer>
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
          className={activeSection === "gallery" ? "active" : ""}
          onClick={() => scrollToRef(galleryRef)}
        >
          사진
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
      </NavItemsContainer>
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
`;

const NavItemsContainer = styled.section`
  display: flex;
  padding: 60px 0 100px;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Anchor = styled.a`
  font-family: semibold;
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
