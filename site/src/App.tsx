import React from "react";
import { Outlet } from "react-router";
import styled from '@emotion/styled';
import HomeNavBar from "./components/homenavbar";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Stack } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  text-align: center;
`;

const ThemeToggle = styled.button`
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 999;
  background: none;
  color: inherit;
  border: none;
`;

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        subtitle2: {
            fontSize: 10
        }   
    }
});

const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        subtitle2: {
            fontSize: 10
        }   
    }
});

type Theme = "light" | "dark";

export default function App() {
  const [theme, setTheme] = React.useState<Theme>("dark");

  return (
    <html>
        <body>
            <ThemeToggle
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setTheme(theme === "dark" ? "light" : "dark");
                }}
            >
                {theme === "dark" ? <DarkMode /> : <LightMode />}
            </ThemeToggle>
            <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                <CssBaseline enableColorScheme />
                    <Stack
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        marginX={2}
                    >
                        <HomeNavBar />
                        <Outlet />
                    </Stack>
            </ThemeProvider>
        </body>
    </html>
  );
}
