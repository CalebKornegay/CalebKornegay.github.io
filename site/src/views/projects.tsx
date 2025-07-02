import { Outlet, useNavigate } from "react-router";
import { Margin } from "../consts";
import { Stack, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button, Chip } from "@mui/material";
import { projects } from '../consts';
import type { project } from "../consts";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div id="projects">
        <Margin />
        <h2>Projects</h2>
        <Outlet />
        <Stack spacing={5}
            alignItems="center"
        >
            {projects.map((pt: project) => {
                return (
                    <Card 
                        sx={{
                            maxWidth: {xs: "100%", md: '100%'},
                        }}
                    >
                        <CardHeader
                            title={pt.title}
                            subheader={pt.timeline}
                        />
                        <CardMedia
                            component="img"
                            image={pt.media}
                            alt={pt.media_alt}
                            sx={{
                                objectFit: 'contain',
                            }}
                        />
                        <CardContent
                            sx={{
                                flexWrap: "wrap"
                            }}
                        >
                            <Typography variant="body2">
                                {pt.description}
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    justifyContent: "center",
                                    marginTop: 2,
                                    flexWrap: "wrap",
                                    rowGap: 1
                                }}
                            >
                                {pt.skills.map((skill: string) => {
                                    return (
                                        <Chip color="secondary" label={skill} variant="outlined" />
                                    )
                                })}
                                
                            </Stack>
                        </CardContent>
                        {pt.title === "Digital Dash" ? null :
                            <CardActions>
                            <Button 
                                size="small"
                                color="primary"
                                onClick={() => navigate("/projects/" + pt.title.toLowerCase().replaceAll(' ', ''))}
                            >
                                Learn More
                            </Button>
                        </CardActions>
                        }
                    </Card>
                );
            })}
        </Stack>
    </div>
  );
}
