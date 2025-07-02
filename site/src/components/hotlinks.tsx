import React from "react";
import type { hotlink } from "../consts";
import { hotlinks } from "../consts";
import { Stack, Link, useTheme } from "@mui/material";

export default function Hotlinks() {
  const theme = useTheme();

  return (
    <Stack spacing={5} direction="row">
      {hotlinks.map((item: hotlink) => {
        const Icon = item.icon;
        return (
            <Link href={item.resource} target="_blank" rel="noreferrer">
                <Icon color={
                    theme.palette.mode === "dark" 
                    && item.icon_color === "#000" ?
                        "#fff" : item.icon_color
                    } size={30} />
            </Link>
        );
      })}
    </Stack>
  );
}
