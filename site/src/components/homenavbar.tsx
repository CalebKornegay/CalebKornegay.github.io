import React from "react";
import { homelinks } from "../consts";
import type { homelink } from "../consts";
import { NavLink } from "react-router";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  return (
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
            alignSelf: 'center',
            justifySelf: 'center',
            bgcolor: theme.palette.mode === "dark" ? "black" : "white"
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
  );
}
