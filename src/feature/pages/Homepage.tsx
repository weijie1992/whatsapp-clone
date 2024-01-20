import { Box } from "@mui/material";
import React from "react";
import { RightPanel } from "./RightPanel";
import { LeftPanel } from "./LeftPanel";

export const Homepage = () => {
  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <LeftPanel />

      <Box sx={{ border: ".05px solid #2f3b44" }}></Box>

      <RightPanel />
    </Box>
  );
};
