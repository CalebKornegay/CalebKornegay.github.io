import React from 'react';
import { Margin } from '../../consts';
import Divider from '../../components/divider';
import { Grid, Stack, Typography, useTheme, Link, ImageList, ImageListItem } from '@mui/material';
import { fzk } from '../../consts';

export default function Fzk() {
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
        <Typography variant="h1" paddingBottom={4}>Fzk</Typography>
        {fzk.paragraphs.map((paragraph: string) => {
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
            {fzk.links.map(link => {
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
        <Typography variant="h4">Windows</Typography>
        <ImageList cols={1}>
            <ImageListItem>
                <img
                    src="/fzk_windows_default.png"
                    alt="Windows fzk"
                />
            </ImageListItem>
        </ImageList>

        <Typography variant="h4">Linux</Typography>
        <ImageList cols={1}>
            <ImageListItem key={1}>
                <img
                    src="/fzk_linux_default.png"
                    alt="Linux fzk"
                />
            </ImageListItem>
        </ImageList>
        <Margin />
    </Stack>
  );
}
