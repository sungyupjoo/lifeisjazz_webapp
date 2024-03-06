import styled from "@emotion/styled";
import { Container, Title } from "./common";

const Gallery = () => (
  <Container innerPadding>
    <Title titleText="사진첩" subTitle="라이재의 활동 내역" />
    <Photos></Photos>
  </Container>
);

export default Gallery;

const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
