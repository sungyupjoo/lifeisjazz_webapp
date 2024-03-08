import styled from "@emotion/styled";
import { Container, Title } from "./common";
import { about } from "./contents/about";
import colors from "../commons/styles/theme";

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
            <h3 style={{ marginBottom: "1.6rem", textAlign: "center" }}>
              {about.title}
            </h3>
            <p>{about.content}</p>
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
`;

const ContentsWrapper = styled.div<{ index: number }>`
  margin-right: ${(props) => (props.index !== about.length ? "2rem" : "")};
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
`;

const InnerContainer = styled.div`
  padding: 0 6px;
`;

const Image = styled.img`
  width: 100%;
  height: 10rem;
  margin-bottom: 1.6rem;
  border-radius: 8px;
  flex-grow: 0;
`;
