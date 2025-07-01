import React from "react";
import styled from '@emotion/styled';
import Divider from "../components/divider";
import { interests_paragraphs } from "../consts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Interests() {
  return (
    <Container id="interests">
      <Divider />
      <h2>Interests</h2>
      {interests_paragraphs.map((paragraph: string) => {
        return <p>{paragraph}</p>
      })}
    </Container>
  );
}
