import { useEffect, useRef, useState }  from 'react';
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

const Margin = styled.div`
    margin-top: 6rem;
`;

export default function Projects() {
    const navigate = useNavigate();
    const sdref = useRef<HTMLDivElement>(null);
    const [sdHeight, setSdHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        setSdHeight(sdref?.current?.clientHeight);
    }, [sdref]);

  return (
    <Container id="projects">
        <Margin />
        <Outlet />
        <Header onClick={() => navigate("/projects")}>Projects</Header>
        <ProjectBox onClick={() => navigate("/projects/rdiff")}>

            <BoxLeft style={{padding: 12, paddingTop: 0}}>
                <h3 style={{textAlign: 'center'}}>Rdiff</h3>
                <p>A file difference viewer Terminal User Interface (TUI) written in Rust with syntax highlighting.</p>
                <SkillsBox>
                    <Skill>Rust</Skill>
                    <Skill>Cargo</Skill>
                    <Skill>Ratatui</Skill>
                    <Skill>Clap</Skill>
                    <Skill>Syntect</Skill>
                    <Skill>Sha2</Skill>
                    <Skill>CLI</Skill>
                    <Skill>TUI</Skill>
                </SkillsBox>
            </BoxLeft>

            <BoxRight style={{height: sdHeight}}>
                <RightImage src='/rdiff.png' alt='2 files being diffed'/>
            </BoxRight>

        </ProjectBox>

        <ProjectBox onClick={() => navigate("/projects/senior_design")}>

            <BoxLeft style={{height: sdHeight}}>
                <LeftImage src='/senior_design_client_home_1.png' alt='blockchain event ticketing' />
            </BoxLeft>

            <BoxRight ref={sdref} style={{padding: 12, paddingTop: 0}}>
                <h3 style={{textAlign: 'center'}}>OpenTicket</h3>
                <p>A blockchain-powered alternative to TicketMaster that implements a low-cost and scalp-resistant ticketing solution</p>
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

        <ProjectBox>

            <BoxLeft style={{padding: 12, paddingTop: 0}}>
                <h3 style={{textAlign: 'center'}}>Digital Dash</h3>
                <p>A digital dash viewer on your phone that reports metrics from your car.</p>
                <SkillsBox>
                    <Skill>Golang</Skill>
                    <Skill>Systemd</Skill>
                    <Skill>Bash</Skill>
                    <Skill>Kotlin</Skill>
                    <Skill>Bluetooth LE</Skill>
                    <Skill>OBD-II</Skill>
                </SkillsBox>
            </BoxLeft>

            <BoxRight style={{height: sdHeight}}>
                <RightImage src='/digital_dash.jpg' alt='digital dash' />
            </BoxRight>

        </ProjectBox>
    </Container>
  );
}