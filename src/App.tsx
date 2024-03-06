import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import {
  About,
  Calendar,
  Contact,
  Gallery,
  Hero,
  Navigation,
  Manager,
} from "./components";
import { globalStyles } from "./commons/styles/globalStyles";

function App() {
  return (
    <Container>
      <Global styles={globalStyles} />
      <Navigation />
      <Hero />
      <About />
      <Manager />
      <Gallery />
      <Calendar />
      <Contact />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0px;
`;
