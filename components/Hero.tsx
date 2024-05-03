import styled from "@emotion/styled";
import { grand_fest, logo_kakao, logo_somoim } from "../public/assets";
import { Container, Button, fadeIn, bounce } from "./common";
import colors from "../styles/theme";
const Hero = () => {
  return (
    <Container id="hero">
      <Banner>
        <TitleWrapper>
          <Title>
            Life is <SubColorSpan>JAZZ</SubColorSpan>
          </Title>
          <SubTitle>
            연주자, 리스너 구분 없이 모두가
            <br /> <SubColorSpan>재즈</SubColorSpan>를 감상하고 연주하고 즐기는
            모임
          </SubTitle>
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
  animation: ${fadeIn} 1s ease-in-out;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
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
  animation: ${bounce} 1s ease;
  @media (max-width: 576px) {
    top: 24%;
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  color: white;
  line-height: 2rem;
`;

const SubColorSpan = styled.span`
  color: ${colors.sub};
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
  position: relative;
  text-align: center;
  @media (max-width: 576px) {
    margin-top: 0.6rem;
  }
`;
