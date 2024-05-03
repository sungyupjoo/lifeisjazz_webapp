import styled from "@emotion/styled";
import { Container, Title } from "./common";
import { about } from "./contents/about";
import colors from "../styles/theme";

const About = () => (
  <Container innerPadding>
    <Title
      titleText="모임 소개"
      subTitle="음악을 좋아하는 누구나 참여할 수 있는 라이재의 활동들"
    />
    <ContentsContainer>
      {about.map((about) => (
        <ContentsWrapper key={about.id} index={about.id}>
          <Image src={about.url} />
          <InnerContainer>
            <InnerTitle>{about.title}</InnerTitle>
            <p style={{ marginBottom: "0.3rem" }}>{about.content}</p>
          </InnerContainer>
        </ContentsWrapper>
      ))}
    </ContentsContainer>
  </Container>
);

export default About;

const ContentsContainer = styled.div`
  display: grid;
  padding-top: 3rem;
  grid-template-columns: repeat(4, 1fr);
  justify-contents: space-between;
  gap: 2rem;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContentsWrapper = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  p {
    white-space: pre-wrap;
  }
  &hover: {
    background-color: ${colors.borderGray};
  }
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  flex-grow: 0;
  transition: transform 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
    opacity: 1.1;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const InnerContainer = styled.div`
  padding: 1rem;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 10rem;
  margin-bottom: 1.6rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-grow: 0;
  @media (max-width: 991px) {
    margin-bottom: 0;
  }
  @media (max-width: 576px) {
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0;
  }
`;

const InnerTitle = styled.h4`
  margin-bottom: 1.2rem;
  text-align: center;
  font-family: semibold;
  @media (max-width: 991px) {
  }
`;
