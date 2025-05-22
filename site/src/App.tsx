import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import HomeNavBar from './components/homenavbar';

const RootContainer = styled.body`
    background-color: rgb(241 245 249);
    color: rgb(17 24 39);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    max-width: 45rem;
    text-align: center;
`;

export default function App() {
  return (
    <RootContainer>
        <Container>
            <HomeNavBar />
            <Outlet />
        </Container>
    </RootContainer>
  )
}
