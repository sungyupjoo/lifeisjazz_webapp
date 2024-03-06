import styled from "@emotion/styled";
import { logo_white } from "../assets";
import colors from "../commons/styles/theme";

const Navigation = () => {
  return (
    <NavBar>
      <LogoContainer>
        <Logo alt="logo" src={logo_white} />
      </LogoContainer>
      <NavItemsContainer>
        <Anchor className="main-color" href="#home">
          홈
        </Anchor>
        <Anchor href="#about">소개</Anchor>
        <Anchor href="#gallery">사진</Anchor>
        <Anchor href="#calendar">일정</Anchor>
        <Anchor href="#contact">연락</Anchor>
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

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

const Logo = styled.img`
  width: 124px;
  height: 124px;
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
  &:active {
    color: ${colors.sub};
  }
  &:hover {
    color: ${colors.sub};
  }
  &:visited {
  }
  &:focus {
    color: ${colors.sub};
  }
`;
