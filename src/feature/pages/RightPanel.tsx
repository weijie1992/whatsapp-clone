import {
  Avatar,
  Box,
  Icon,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomAppBar } from "../../foundation/CustomAppBar/CustomAppBar";
import SearchIcon from "@mui/icons-material/Search";
import { CustomMenuButton } from "../../foundation/CustomMenuButton/CustomMenuButton";
import { rightPanelMenuItem } from "../../utils/constant";
import bg from "../../assets/background.jpg";
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

export const RightPanel = () => {
  return (
    <Box height="100%" width="70%" display="flex" flexDirection="column">
      <CustomAppBar>
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex">
            <Avatar />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              pl="10px"
            >
              <Typography variant="body1" color="white">
                Weijie
              </Typography>
              <Typography variant="caption" color="white">
                Online
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <SearchIcon sx={{ color: "#afbac8" }} />
            <CustomMenuButton menuItems={rightPanelMenuItem} />
          </Box>
        </Box>
      </CustomAppBar>
      <Box
        flex={1} //IMPORTANT: flex={1} takes the remaining height of his siblings
        sx={{
          background: "green",
        }}
      >
        <Box
          height="100%"
          width="100%"
          component="img"
          src={bg}
          alt="background"
        ></Box>
      </Box>
      <Box
        height="65px"
        alignItems="center"
        display="flex"
        sx={{
          background: "#1f2c33",
          padding: "0px 15px",
        }}
      >
        <IconButton onClick={() => {}}>
          <MoodIcon sx={{ color: "#8696a1", height: "25px", width: "25px" }} />
        </IconButton>
        <IconButton onClick={() => {}}>
          <AttachFileIcon
            sx={{ color: "#8696a1", height: "25px", width: "25px" }}
          />
        </IconButton>
        <Box flex={1} pl="5px" pr="5px">
          <Input
            fullWidth
            placeholder="Type a message"
            sx={{
              background: "#2b3943",
              height: "45px",
              borderRadius: "6px",
              color: "white",
              padding: "0px 10px",
            }}
            disableUnderline
          />
        </Box>
        <IconButton onClick={() => {}}>
          <MicIcon sx={{ color: "#8696a1", height: "25px", width: "25px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
