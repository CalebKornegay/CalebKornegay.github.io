import React from "react";
import styled from "styled-components";
import { Margin } from "../consts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Container id="home">
      <Margin />
      <h2>About Me</h2>
      <p>
        Hello, I'm Caleb, an aspiring software engineer from Knoxville,
        Tennesee.
      </p>
      <p>
        I recently graduated with a Bachelor's of Science in Computer Science
        with a minor in cybersecurity from the University of Tennessee -
        Knoxville.
      </p>
    </Container>
  );
}
