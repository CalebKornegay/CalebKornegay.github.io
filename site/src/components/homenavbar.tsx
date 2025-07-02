import React from "react";
import { homelinks } from "../consts";
import type { homelink } from "../consts";
import { NavLink } from "react-router";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from "@mui/material/Box";

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
    // <Box
    //     display="flex"
    //     justifyContent="center"
    //     alignItems="center"
    //     alignSelf="center"
    // >
        <ToggleButtonGroup
            value={currentSection}
            exclusive
            onChange={handleUpdate}
            aria-label="Location"
            color="secondary"
            sx={{
                position: "fixed",
                top: "1.5rem",
                zIndex: 999,
                height: "1.75rem",
                paddingX: 0,
                marginX: 0,
                alignSelf: 'center',
                justifySelf: 'center'
            }}
        >
            {homelinks.map((link: homelink) => (
                <NavLink to={{ pathname: "/", hash: link.href}}>
                    <ToggleButton 
                        sx={{
                            typography: {xs: 'subtitle2', md: 'body1'}
                        }}
                        value={link.href.substring(1)}>
                        {link.href.substring(1)}
                    </ToggleButton>
                </NavLink>
            ))}
        </ToggleButtonGroup>
    // </Box>
  );
}
