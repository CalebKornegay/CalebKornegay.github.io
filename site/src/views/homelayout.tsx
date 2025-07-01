import React from "react";
import ScrollToHashElement from "../components/scrolltohashelement";
import styled from '@emotion/styled';
import About from "./about";
import Interests from "./interests";
import Projects from "./projects";
import Experience from "./experience";
import Skills from "./skills";
import Hotlinks from "../components/hotlinks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  max-width: 55rem;
  text-align: center;
`;

const BottomSpacing = styled.div`
  margin-top: 3rem;
`;

export default function HomeLayout() {
  return (
    <>
      <Container>
        <ScrollToHashElement
          initialBehavior="smooth"
          behavior="smooth"
          inline="nearest"
          block="start"
        />
        <About />
        <Hotlinks />
        <Interests />
        <Projects />
        <Experience />
        <Skills />
        <BottomSpacing />
      </Container>
    </>
  );
}
