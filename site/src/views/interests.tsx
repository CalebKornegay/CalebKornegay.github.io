import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Interests() {
  return (
    <Container id="interests">
        <h2>Interests</h2>
        <p>I am mostly interested in embedded development using C/C++ and Rust (which I learned recently)!</p>
        <p>I also enjoy mobile development using Kotlin or React Native and backend development in Golang.</p>
        <p>I am currently learning Zig.</p>
    </Container>
  );
}
