import styled from "@emotion/styled";
import { grand_fest, logo_kakao, logo_somoim } from "../assets";
import { Container, Button } from "./common";
import colors from "../commons/styles/theme";

const Hero = () => {
  return (
    <Container id="hero">
      <Banner>
        <TitleWrapper>
          <Title>life is JAZZ</Title>
          <SubTitle>재즈를 감상하고 연주하고 즐기는 모임입니다</SubTitle>
          <ButtonWrapper>
            <Button
              text={"소모임 링크"}
              backgroundColor={colors.main}
              logoUrl={logo_somoim}
              href="https://somoim.friendscube.com/g/7aef26c8-9205-11ea-a0ae-0a6725d6f2001"
            />
            <Button
              text={"카카오 오픈채팅"}
              backgroundColor={colors.main}
              logoUrl={logo_kakao}
              href="https://open.kakao.com/o/g1pb2wmc"
            />
          </ButtonWrapper>
        </TitleWrapper>
      </Banner>
    </Container>
  );
};

export default Hero;

const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${grand_fest});
  background-position: 0% 0%, 0% 0%;
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  color: white;
  margin-bottom: 1.3rem;
`;

const ButtonWrapper = styled.div`
  position: relative;
  text-align: center;
`;
