import React from "react";
import { Margin } from "../../consts";
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
`;

export default function DigitalDash() {
  return (
    <Container>
      <Margin />
      <h1>Digital Dash</h1>
    </Container>
  );
}
