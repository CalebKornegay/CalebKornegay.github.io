import React from "react";
import { Margin } from "../../consts";
import Divider from "../../components/divider";
import { Badge, Grid, ImageList, ImageListItem, ImageListItemBar, Link, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { openticket } from "../../consts";
import { purple } from "@mui/material/colors";


export default function OpenTicket() {
  React.useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  const theme = useTheme();
  const small_screen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
        alignItems="center"
        justifyContent="center"
        width="100%"
    >
        <Margin />
        <Typography variant="h1" paddingBottom={4}>Open Ticket</Typography>
        {openticket.paragraphs.map((paragraph: string) => {
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
            {openticket.links.map((link, idx) => {
                const Icon = link.icon;
                return (
                    <Grid size={1}>
                        <Badge 
                            badgeContent={"web " + (idx + 2)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
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
                        </Badge>
                    </Grid>
                );
            })}
        </Grid>

        <Margin />
        <Typography variant="h2" paddingBottom={3}>Gallery</Typography>
        {Object.entries(openticket.images).map(([key, value]) => {
            return (
                <>
                <Typography 
                    variant="h4"
                    paddingBottom={2}
                >
                    {key.split("_")
                        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                        .join(" ")
                    }
                </Typography>
                <ImageList 
                    cols={small_screen ? 1 : 2}
                    gap={8}
                    sx={{
                        paddingBottom: 5,
                    }}
                >
                    {value.map(src => {
                        return (
                            <ImageListItem>
                                <img
                                    src={src}
                                    alt={openticket.image_alt}
                                    style={{
                                        maxHeight: '70vh'
                                    }}
                                />
                                <ImageListItemBar
                                    sx={{
                                        "& .MuiImageListItemBar-title": { color: purple[200] }
                                    }}
                                    title={
                                        src.split('/')
                                        .pop()
                                        ?.slice(0, -4)
                                        ?.split("_")
                                        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                                        ?.join(" ")
                                    }
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
                </>
            );  
        })}
    </Stack>
  );
}
