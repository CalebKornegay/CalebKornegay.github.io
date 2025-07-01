import React from "react";
import { Margin } from "../consts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { skills } from "../consts";
import type { Skill } from "../consts";

export default function Skills() {
  return (
    <div id="skills">
      <Margin />
      <h2>Skills</h2>
      <Stack spacing={4}>
        {Object.entries(skills).map(([key, value]) => {
            return (
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="div">
                            {key[0].toUpperCase() + key.substring(1)}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {value.sort((item1, item2) => item1.name.localeCompare(item2.name)).map(item => {
                                let t = item as Skill;
                                return (
                                    <ListItem>
                                            <ListItemIcon>
                                                {t?.icon ? <t.icon /> : null}
                                            </ListItemIcon>
                                        
                                        {t?.children ?
                                            <Accordion>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                    <Typography component="div">
                                                        {item.name}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <List>
                                                    {t.children.sort((item1, item2) => item1.name.localeCompare(item2.name)).map(item => {
                                                        return (
                                                            <ListItem>
                                                                <ListItemText>
                                                                    {item.name}
                                                                </ListItemText>
                                                            </ListItem>
                                                        );
                                                    })}
                                                </List>
                                                </AccordionDetails>
                                            </Accordion>
                                        : (
                                            <ListItemText>
                                                {t.name}
                                            </ListItemText>
                                        )
                                        }
                                    </ListItem>
                                );
                            })}
                        </List>
                    </AccordionDetails>
                </Accordion>
            );
        })}
      </Stack>
    </div>
  );
}
