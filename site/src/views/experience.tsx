import React from "react";
import { Margin } from "../consts";
import type { experience } from "../consts";
import { experiences } from "../consts";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function Experience() {
  return (
    <div id="experience">
      <Margin />
      <h2>Experience</h2>
      {experiences.map((ex: experience) => {
        return (
            <Card>
                <CardHeader
                    title={ex.title}
                    subheader={ex.timeline}
                />
                <CardContent
                    sx={{
                        display: "flex", flexDirection: "column",
                        rowGap: 4
                    }}
                >
                    {ex.description.map((p: string) => {
                        return (
                            <Typography variant="body2">
                                {p}
                            </Typography>
                        )
                    })}
                </CardContent>
            </Card>
        );
      })}
    </div>
  );
}
