import React from "react";
import { Outlet } from "react-router";
import styled from '@emotion/styled';
import HomeNavBar from "./components/homenavbar";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DarkMode, LightMode } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  text-align: center;
`;

const ThemeToggle = styled.button`
  position: fixed;
  bottom: 1.5em;
  right: 1.5em;
  z-index: 999;
  background: none;
  color: inherit;
  border: none;
`;

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});

type Theme = "light" | "dark";

export default function App() {
  const [theme, setTheme] = React.useState<Theme>("dark");

  return (
    <html>
        <body>
            <ThemeToggle
                onClick={() => {setTheme(theme === "dark" ? "light" : "dark")}}
            >
                {theme === "dark" ? <DarkMode /> : <LightMode />}
            </ThemeToggle>
            <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                <CssBaseline enableColorScheme />
                    <Container>
                        <HomeNavBar />
                        <Outlet />
                    </Container>
            </ThemeProvider>
        </body>
    </html>
  );
}
