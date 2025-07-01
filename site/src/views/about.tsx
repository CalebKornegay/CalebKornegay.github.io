import React from "react";
import styled from '@emotion/styled';
import { Margin } from "../consts";
import { about_me_paragraphs } from "../consts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function About() {
  return (
    <Container id="home">
      <Margin />
      <h2>About Me</h2>
      {about_me_paragraphs.map((paragraph: string) => {
        return <p>{paragraph}</p>;
      })}
    </Container>
  );
}
