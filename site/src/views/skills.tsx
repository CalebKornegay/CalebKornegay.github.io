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

const SkillsBox = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    gap: 0.5rem; 
    justify-content: center; 
    border-radius: 0.5rem; 
    font-size: 1.125rem;
    line-height: 1.75rem; 
    color: #1F2937; 
`;

const Skill = styled.div`
    border-radius: 10px;
    border-color: white;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 1.25rem;
    padding-right: 1.25rem; 
    border-radius: 0.75rem; 
    border-width: 1px; 
    background-color: #ffffff; 
`;

export default function Skills() {
  return (
    <Container id="skills">
        <Margin />
        <h2>Skills</h2>
        <SkillsBox>
            <Skill>C/C++</Skill>
            <Skill>C#</Skill>
            <Skill>WPF</Skill>
            <Skill>Python</Skill>
            <Skill>PySide</Skill>
            <Skill>Bash</Skill>
            <Skill>Rust</Skill>
            <Skill>Typescript</Skill>
            <Skill>React</Skill>
            <Skill>React Native</Skill>
            <Skill>SQL</Skill>
            <Skill>PostgreSQL</Skill>
            <Skill>Git</Skill>
            <Skill>Embedded Systems</Skill>
            <Skill>RTOS</Skill>
            <Skill>Arduino</Skill>
            <Skill>Raspberry Pi</Skill>
            <Skill>Bluetooth</Skill>
            <Skill>Linux</Skill>
            <Skill>AWS</Skill>
            <Skill>CDK</Skill>
            <Skill>RDS</Skill>
            <Skill>Solidity</Skill>
        </SkillsBox>
    </Container>
  );
}
