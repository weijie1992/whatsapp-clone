import { Box } from "@mui/material";
import React from "react";

interface CustomAppBar {
  children: any;
}

export const CustomAppBar = ({ children }: CustomAppBar) => {
  return (
    <Box height="63px" sx={{ background: "#1f2c33", padding: "0px 20px" }}>
      {children}
    </Box>
  );
};
