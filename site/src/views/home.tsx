import React from 'react';
import ScrollToHashElement from '../components/scrolltohashelement';
import styled from 'styled-components';
import HomeNavBar from '../components/homenavbar';

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Margin = styled.div`
    margin-top: 6rem;
`;

export default function Home() {
    return (
        <Container>
            <ScrollToHashElement behavior='smooth' inline='center' block='center'/>
            <HomeNavBar />
            <Margin />
            <div id="home">Home</div>
            <div id="interests">Interests</div>
            <div id="projects">Projects</div>
            <div id="experience">Experience</div>
            <div id="skills">Skills</div>
        </Container>
    );
}
