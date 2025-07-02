import React from "react";
import styled from '@emotion/styled';
import { Margin } from "../consts";
import { about_me_paragraphs } from "../consts";
import { Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1em;
  width: 100%;
`;

export default function About() {
  return (
    <Container id="home">
      <Margin />
      <h2>About Me</h2>
      {about_me_paragraphs.map((paragraph: string) => {
        return <Typography 
                variant="body1"
                sx={{
                    paddingBottom: 2
                }}
            >
                {paragraph}
            </Typography>;
      })}
    </Container>
  );
}
