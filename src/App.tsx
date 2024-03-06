import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import {
  About,
  Schedule,
  Contact,
  Gallery,
  Hero,
  Navigation,
} from "./components";
import { globalStyles } from "./commons/styles/globalStyles";
import { useEffect, useRef, useState } from "react";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const scheduleRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState<string>("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    const sections = [
      homeRef.current,
      aboutRef.current,
      galleryRef.current,
      scheduleRef.current,
      contactRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [homeRef, aboutRef, galleryRef, scheduleRef, contactRef]);

  return (
    <Container>
      <Global styles={globalStyles} />
      <Navigation
        homeRef={homeRef}
        aboutRef={aboutRef}
        galleryRef={galleryRef}
        scheduleRef={scheduleRef}
        contactRef={contactRef}
        activeSection={activeSection}
      />
      <div id="home" ref={homeRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="gallery" ref={galleryRef}>
        <Gallery />
      </div>
      <div id="schedule" ref={scheduleRef}>
        <Schedule />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0px;
`;
