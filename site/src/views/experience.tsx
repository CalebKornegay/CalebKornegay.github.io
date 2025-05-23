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

const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding-bottom: 8px;
    text-align: center;
`;

const Header = styled.p`
    font-weight: bold;
    font-size: large;
    padding: 0;
    margin: 0;
`;

const ExperienceBox = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 8px 16px 8px 16px;
    text-align: start;
`;


export default function Experience() {
  return (
    <Container id="experience">
        <Margin />
        <h2>Experience</h2>
        <ExperienceBox>
            <HeaderBox>
                <Header>Electrical Research and Development Intern</Header>
                <Header>Siemens Healthineers (01/2024 - 08/2024)</Header>
            </HeaderBox>
            <p>I took a semester off of school to coop at Siemens Healthineers.</p>

            <p>My main project was a RESTful web server and corresponding user interface on a Zephyr RTOS device. It was responsible for reporting the Differential Clock Source's metrics and being able to view and change its state and file system. Primary usage was for engineering debugging without JTAG due to the device's enclosure.</p>

            <p>I was put in charge of hardware, wiring, soldering, and software for a distributed system that is responsible for measuring flow rates at 39 different endpoints and interacting with a PLC (modbus) and another embedded device simultaneously and logging their respective metrics.</p>

            <p>I was responsible for expanding a current GUI application to include tests for Time to Digital Converters (TDCs) including  the normal functional test and a configurable sweeping delay test. After adding this functionality I was asked to expand this to another board to be under the same software solution. This was then expanded to include non-sine wave DAC outputs so that the op amp could be debugged as well. I was able to finish the embedded software for this before I left, but not the GUI implementation.</p>
            
            <p>I was also tasked with a CUDA/C++ project to help scale processing speeds with their data acquisition rates by leveraging GPU acceleration which has now been taken over by someone else.</p>
        </ExperienceBox>
    </Container>
  );
}
