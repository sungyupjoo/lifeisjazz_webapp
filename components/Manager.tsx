"use client";

import styled from "@emotion/styled";
import { Container, Title, bounce } from "./common";
import { manager } from "./contents/manager";
import colors from "../styles/theme";
import { useEffect, useRef, useState } from "react";

const Manager = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container innerPadding backgroundGray ref={containerRef}>
      <Title titleText="운영진" subTitle="2024년 라이재를 이끌어가는 운영진" />
      <TestimonialContainer>
        {manager.map((item) => (
          <TestimonialWrapper
            key={item.id}
            index={item.id}
            isVisible={isVisible}
          >
            <UpperContainer>
              <Photo src={item.url} />
            </UpperContainer>
            <RightContainer>
              <Position>{item.position}</Position>
              <Name>{item.name}</Name>
              <Introduction>{item.introduction}</Introduction>
            </RightContainer>
          </TestimonialWrapper>
        ))}
      </TestimonialContainer>
    </Container>
  );
};

export default Manager;

const TestimonialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
  gap: 36px;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const TestimonialWrapper = styled.div<{ index: number; isVisible: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding: 1.4rem 1rem;
  border-radius: 10px;
  &:hover {
    background-color: ${colors.borderGray};
  }
  animation: ${(props) =>
    props.isVisible
      ? `${bounce} 1s ease ${props.index * 0.2}s forwards`
      : "none"};
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const RightContainer = styled.div`
  flex-grow: 1;
  p {
    white-space: pre-wrap;
  }
`;

const Photo = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 124px;
  flex-shrink: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Position = styled.h4`
  color: ${colors.gray};
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
  margin-left: 0.1rem;
`;

const Name = styled.h3`
  margin-bottom: 1rem;
`;

const Introduction = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
`;
