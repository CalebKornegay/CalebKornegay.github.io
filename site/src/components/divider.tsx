import React from "react";
import { Divider as DividerInternal } from "@mui/material";

export default function Divider() {
    return <DividerInternal 
        orientation="vertical"
        sx={{
            height: "10rem", opacity: 0.8, marginTop: "3em", marginBottom: "3em"
        }}
    />;
}
