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

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    max-width: 45rem;
    text-align: center;
`;

const Margin = styled.div`
    margin-top: 6rem;
`;

export default function HomeLayout() {
    return (
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
    );
}
