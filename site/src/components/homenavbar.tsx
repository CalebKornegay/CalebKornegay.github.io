import React from "react";
import { homelinks } from "../consts";
import styled from "@emotion/styled";
import type { homelink } from "../consts";
import { NavLink } from "react-router";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Container = styled.div`
  position: fixed;
  top: 1.5em;
  z-index: 999;
  height: 1.75em;
  width: 95%;
  @media only screen and (min-width: 500px) {
    max-width: 35rem;
  }
`;

type Section = "home" | "interests" | "projects" | "experience" | "skills";

export default function HomeNavBar() {
  const [currentSection, setCurrentSection] = React.useState<Section>("home");
  const handleUpdate = (
    _: React.MouseEvent<HTMLElement>,
    newSection: Section,
  ) => {
    if (newSection) {
        setCurrentSection(newSection);
    }
  };

  return (
    <Container>
        <ToggleButtonGroup
            value={currentSection}
            exclusive
            onChange={handleUpdate}
            aria-label="Location"
            color="secondary"
        >
            {homelinks.map((link: homelink) => (
                <NavLink to={{ pathname: "/", hash: link.href}}>
                    <ToggleButton value={link.href.substring(1)}>{link.href.substring(1)}
                    </ToggleButton>
                </NavLink>
            ))}
        </ToggleButtonGroup>
    </Container>
  );
}
