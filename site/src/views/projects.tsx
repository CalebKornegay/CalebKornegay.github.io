import React from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router';

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
    row-gap: 5px;
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
    object-fit: cover;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const LeftImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const Header = styled.h2`
    cursor: pointer;
    text-decoration: none;
`;

export default function Projects() {
    const navigate = useNavigate();
  return (
    <Container id="projects">
        <Outlet />
        <Header onClick={() => navigate("/projects")}>Projects</Header>
        <ProjectBox onClick={() => navigate("/projects/rdiff")}>

            <BoxLeft style={{paddingLeft: 12, paddingBottom: 8, marginRight: 2}}>
                <h3 style={{textAlign: 'center'}}>Rdiff</h3>
                <p>A file difference viewer Terminal User Interface (TUI) written in Rust with syntax highlighting.</p>
                <SkillsBox>
                    <Skill>Rust</Skill>
                    <Skill>Cargo</Skill>
                    <Skill>Ratatui</Skill>
                    <Skill>Clap</Skill>
                    <Skill>Syntect</Skill>
                    <Skill>TUI</Skill>
                    <Skill>Sha2</Skill>
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

            <BoxRight style={{paddingLeft: 12, paddingBottom: 8}}>
                <h3 style={{textAlign: 'center'}}>OpenTicket</h3>
                <p>A Blockchain alternative to TicketMaster that implements a low-cost and scalp-resistant ticketing solution</p>
                <SkillsBox>
                    <Skill>Golang</Skill>
                    <Skill>AWS</Skill>
                    <Skill>Solidity</Skill>
                    <Skill>React</Skill>
                    <Skill>React Native</Skill>
                    <Skill>Radix UI</Skill>
                    <Skill>CDK</Skill>
                    <Skill>PostgreSQL</Skill>
                    <Skill>Serverless</Skill>
                </SkillsBox>
            </BoxRight>

        </ProjectBox>
    </Container>
  );
}