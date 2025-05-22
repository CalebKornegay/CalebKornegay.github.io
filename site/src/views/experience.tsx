import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Margin = styled.div`
    margin-top: 6rem;
`;


export default function Experience() {
  return (
    <Container id="experience">
        <Margin />
        <h2>Experience</h2>
    </Container>
  );
}
