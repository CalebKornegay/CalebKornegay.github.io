import React from "react";
import ScrollToHashElement from "../components/scrolltohashelement";
import About from "./about";
import Interests from "./interests";
import Projects from "./projects";
import Experience from "./experience";
import Skills from "./skills";
import Hotlinks from "../components/hotlinks";
import Stack from "@mui/material/Stack";

export default function HomeLayout() {
  return (
    <Stack
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        paddingBottom="3rem"
        maxWidth={{
            xs: '100%',
            md: '55rem'
        }}
    >
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
    </Stack>
  );
}
