import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router";
import { Margin } from "../consts";

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
  height: 50%;
  display: flex;
  column-gap: 5px;
  row-gap: 5px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

const TitleDescriptionBox = styled.div`
  height: 50%;
`;

const Skill = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px 8px 4px 8px;
  text-align: center;
  background-color: white;
  color: blacks;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Box = styled.div`
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
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export default function Projects() {
  const navigate = useNavigate();
  const boxref = useRef<HTMLDivElement>(null);
  const [boxHeight, setboxHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (boxref?.current?.clientHeight) {
        setboxHeight(boxref.current.clientHeight + 65);
    }
    // setboxHeight(boxref?.current?.clientHeight);
  }, [boxref]);

  return (
    <Container id="projects">
      <Margin />
      <Outlet />
      <h2>Projects</h2>
      <ProjectBox
        style={{ height: boxHeight }}
        onClick={() => navigate("/projects/openticket")}
      >
        
        <Box ref={boxref} style={{ padding: 12, paddingTop: 0 }}>
          <TitleDescriptionBox>
            <h3 style={{ textAlign: "center" }}>OpenTicket</h3>
            <p>
                A blockchain-powered alternative to TicketMaster that implements a
                low-cost and scalp-resistant ticketing solution.
            </p>
          </TitleDescriptionBox>
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
        </Box>

        <Box>
          <RightImage
            src="/senior_design/user_home_1.png"
            alt="blockchain event ticketing"
          />
        </Box>

      </ProjectBox>

      <ProjectBox
        style={{ height: boxHeight }}
        onClick={() => navigate("/projects/rdiff")}
      >

        <Box>
          <LeftImage src="/rdiff.png" alt="2 files being diffed" />
        </Box>

        <Box style={{ padding: 12, paddingTop: 0 }}>
          <TitleDescriptionBox>
            <h3 style={{ textAlign: "center" }}>Rdiff</h3>
            <p>
                A file difference viewer Terminal User Interface (TUI) written in
                Rust with syntax highlighting.
            </p>
          </TitleDescriptionBox>
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
        </Box>

      </ProjectBox>

      <ProjectBox
        style={{ height: boxHeight }} 
        onClick={() => navigate("/projects/fzk")}
      >
        <Box style={{ padding: 12, paddingTop: 0 }}>
            <TitleDescriptionBox>
              <h3 style={{ textAlign: "center" }}>Fzk</h3>
              <p>A fuzzy matching TUI for killing processes like a breeze.</p>
            </TitleDescriptionBox>
            <SkillsBox>
                <Skill>Rust</Skill>
                <Skill>Multithreading</Skill>
                <Skill>TUI</Skill>
                <Skill>Clap</Skill>
                <Skill>Fuzzy Search</Skill>
                <Skill>Traits</Skill>
                <Skill>Synchronization</Skill>
            </SkillsBox>
        </Box>

        <Box>
            <RightImage
                src="/fzk_windows_default.png" 
                alt="fuzzy process killer" 
            />
        </Box>

      </ProjectBox>

      <ProjectBox
        style={{ height: boxHeight, cursor: "default" }}
        // onClick={() => navigate("/projects/digitaldash")}
      >

        <Box>
          <LeftImage src="/digital_dash.jpg" alt="digital dash" />
        </Box>

        <Box style={{ padding: 12, paddingTop: 0 }}>
          <TitleDescriptionBox>
            <h3 style={{ textAlign: "center" }}>Digital Dash</h3>
            <p>
                A digital dash viewer on your phone that reports metrics from your
                car.
            </p>
          </TitleDescriptionBox>
          <SkillsBox>
            <Skill>Golang</Skill>
            <Skill>Systemd</Skill>
            <Skill>Bash</Skill>
            <Skill>Kotlin</Skill>
            <Skill>Bluetooth LE</Skill>
            <Skill>OBD-II</Skill>
          </SkillsBox>
        </Box>

      </ProjectBox>
    </Container>
  );
}
