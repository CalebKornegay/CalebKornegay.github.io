import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Container = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 24px;
`;

const ProjectBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
`;

const SkillsBox = styled.div`
    height: 40%;
    display: flex;
    column-gap: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
`;

const Skill = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 4px 8px 4px 8px;
    text-align: center;
    background-color: #3c3c3c;
    color: white;
    border-radius: 15px;
`;

const BoxLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: start;
`;

const BoxRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: start;
`;

const RightImage = styled.img`
    max-width: 100%;
    height: 100%;
    display: block;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const LeftImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export default function Projects() {
    const navigate = useNavigate();
  return (
    <Container id="projects">
        <h2>Projects</h2>
        <ProjectBox onClick={() => navigate("/projects/rdiff")}>
            <BoxLeft style={{paddingLeft: 8}}>
                <h4 style={{textAlign: 'center'}}>Rdiff - A file difference viewer</h4>
                <p>A file diff Terminal User Interface (TUI) written in Rust.</p>
                <SkillsBox>
                    <Skill>Rust</Skill>
                    <Skill>Cargo</Skill>
                    <Skill>Ratatui</Skill>
                    <Skill>Clap</Skill>
                    <Skill>Syntect</Skill>
                </SkillsBox>
            </BoxLeft>
            <BoxRight>
                <RightImage src='/rdiff.png' alt='2 files being diffed'/>
            </BoxRight>
        </ProjectBox>
        <ProjectBox onClick={() => navigate("/projects/senior_design")}>
            <BoxLeft>
                <LeftImage src='/senior_design_client_home_1.png' alt='blockchain event ticketing' />
            </BoxLeft>
            <BoxRight style={{paddingLeft: 8}}>

            </BoxRight>
        </ProjectBox>
    </Container>
  );
}