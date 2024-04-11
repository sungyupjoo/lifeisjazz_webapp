import styled from "@emotion/styled";
import { logo_white } from "../../public/assets";
import colors from "../commons/styles/theme";
import { RefObject } from "react";
import Login from "./Login/Login";

interface NavigationProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  managerRef: RefObject<HTMLDivElement>;
  galleryRef: RefObject<HTMLDivElement>;
  scheduleRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  personalInfoRef: RefObject<HTMLDivElement>;
  activeSection: string | undefined;
}

const Navigation: React.FC<NavigationProps> = ({
  homeRef,
  aboutRef,
  managerRef,
  galleryRef,
  scheduleRef,
  contactRef,
  personalInfoRef,
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
  padding: 60px 0px;
  flex: 1.3;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  text-align: center;
  width: 100%;
  margin-bottom: 1.4rem;
`;
