import React from "react";
import { Margin } from "../../consts";
import { FaGithub, FaRust } from "react-icons/fa6";
import Divider from "../../components/divider";
import { rdiff } from "../../consts";
import { Grid, ImageList, ImageListItem, Link, Stack, Typography, useTheme } from "@mui/material";

export default function Rdiff() {
  React.useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  const theme = useTheme();

  return (
    <Stack
        alignItems="center"
        justifyContent="center"
        width="100%"
    >
        <Margin />
        <Typography variant="h1" paddingBottom={4}>Rdiff</Typography>
        {rdiff.paragraphs.map((paragraph: string) => {
            return (
                <Typography variant="body1" paddingBottom={2}>
                    {paragraph}
                </Typography>
            );
        })}
        <Divider />
        
        <Grid 
            container
            spacing={15}
            sx={{
                width: '100%',
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {rdiff.links.map(link => {
                const Icon = link.icon;
                return (
                    <Grid size={1}>
                        <Link
                            href={link.href}
                            target={link.target}
                            rel={link.rel}
                        >
                            <Icon 
                                color={
                                theme.palette.mode === "dark" 
                                && link.icon_color === "#000" ?
                                    "#fff" : link.icon_color
                                }
                                size={30}
                            />
                        </Link>
                        
                    </Grid>
                );
            })}
        </Grid>

        <Margin />
        <Typography variant="h2" paddingBottom={3}>Gallery</Typography>
        <ImageList cols={1}>
            <ImageListItem>
                <img
                    src="/rdiff.png"
                    alt="2 files being diffed"
                />
            </ImageListItem>
        </ImageList>
    </Stack>
  );
}
