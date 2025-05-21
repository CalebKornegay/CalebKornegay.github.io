import React from 'react';
import ScrollToHashElement from '../components/scrolltohashelement';
import styled from 'styled-components';
import HomeNavBar from '../components/homenavbar';
import Home from './home';
import Interests from './interests';
import Projects from './projects';
import Experience from './experience';
import Skills from './skills';
import Divider from '../components/divider';
import Hotlinks from '../components/hotlinks';

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

const BlueBubble = styled.div`
    position: absolute; 
    border-radius: 9999px; 
    background-color: #90d5ff;
    filter: blur(9999px);
    opacity: 0.5;
    z-index: -999;
    top: 0rem;
    left: 3vw;
    height: 85vh;
    width: 50vw;
`;

const OrangeBubble = styled.div`
    position: absolute; 
    border-radius: 9999px; 
    background-color: #ff474c;
    filter: blur(9999px);
    opacity: 0.35;
    z-index: -999;
    top: 0rem;
    right: 3vw;
    height: 85vh;
    width: 50vw;
`;

const Margin = styled.div`
    margin-top: 6rem;
`;

export default function HomeLayout() {
    return (
        <RootContainer>
            <BlueBubble />
            <OrangeBubble />
            <Container>
                <ScrollToHashElement behavior='smooth' inline='center' block='center'/>
                <HomeNavBar />
                <Margin />
                <Home />
                <Hotlinks />
                <Divider />
                <Interests />
                <Margin />
                <Projects />
                <Margin />
                <Experience />
                <Margin />
                <Skills />
            </Container>
        </RootContainer>
    );
}
