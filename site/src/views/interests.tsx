import React from "react";
import styled from '@emotion/styled';
import Divider from "../components/divider";
import { interests_paragraphs } from "../consts";
import { Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Interests() {
  return (
    <Container id="interests">
      <Divider />
      <h2>Interests</h2>
      {interests_paragraphs.map((paragraph: string) => {
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
