import { CustomAppBar } from "../../foundation/CustomAppBar/CustomAppBar";
import { Avatar, Box, IconButton, Input } from "@mui/material";
import { CustomMenuButton } from "../../foundation/CustomMenuButton/CustomMenuButton";
import { leftPanelMenuItem } from "../../utils/constant";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { ChatCard } from "../../foundation/ChatCard/ChatCard";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { ChatCardType } from "../../utils/LeftPanel.types";

const localChats: ChatCardType[] = [
  {
    name: "Balram",
    lastText: "Hey there testing whatsapp",
    lastSeen: "4:21 PM",
    selected: true,
  },
  {
    name: "Dev Stack",
    lastText: "DevStack testing whatsapp",
    lastSeen: "8:51 PM",
    selected: false,
  },
  {
    name: "Test 1",
    lastText: "Testing okk how test test 123",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 2",
    lastText: "Testing Yes",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 3",
    lastText: "Ok Tested",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 4",
    lastText: "Yes",
    lastSeen: "8:51 PM",
    selected: false,
  },
  {
    name: "HDFC",
    lastText: "Take a lone",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 2",
    lastText: "Testing okk how test test 123",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Balram Rathore",
    lastText: "Hey there testing whatsapp",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Dev Stack",
    lastText: "DevStack testing whatsapp",
    lastSeen: "8:51 PM",
    selected: false,
  },
  {
    name: "Test 1",
    lastText: "Testing okk how test test 123",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 2",
    lastText: "Testing okk how test test 123",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 2",
    lastText: "Testing Yes",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 3",
    lastText: "Ok Tested",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 4",
    lastText: "Yes",
    lastSeen: "8:51 PM",
    selected: false,
  },
  {
    name: "HDFC",
    lastText: "Take a lone",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 2",
    lastText: "Testing okk how test test 123",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Balram Rathore",
    lastText: "Hey there testing whatsapp",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Dev Stack",
    lastText: "DevStack testing whatsapp",
    lastSeen: "8:51 PM",
    selected: false,
  },
  {
    name: "Test 1",
    lastText: "Testing okk how test test 123",
    lastSeen: "4:21 PM",
    selected: false,
  },
  {
    name: "Test 2",
    lastText: "Testing okk how test test 123",
    lastSeen: "4:21 PM",
    selected: false,
  },
];

export const LeftPanel = () => {
  return (
    <Box height="100%" width="30%" overflow="hidden">
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
          </Box>
          <Box display="flex">
            <IconButton sx={{ paddingRight: "18px" }}>
              <DonutLargeIcon sx={{ color: "#afbac8" }} />
            </IconButton>
            <IconButton>
              <ChatIcon
                sx={{
                  color: "#afbac8",
                  paddingRight: "5px",
                }}
              />
            </IconButton>
            <CustomMenuButton menuItems={leftPanelMenuItem} />
          </Box>
        </Box>
      </CustomAppBar>
      <Box
        sx={{
          background: "#101b20",
          padding: "12px",
        }}
        display="flex"
      >
        <Box
          display="flex"
          sx={{
            background: "#1f2c33",
            borderRadius: "8px",
            padding: "0px 8px",
          }}
          flex={1}
        >
          <IconButton onClick={() => {}}>
            <SearchIcon
              sx={{
                color: "#8696a1",
                height: "20px",
                width: "20px",
              }}
            />
          </IconButton>
          <Input
            fullWidth
            placeholder="Search or start new chat"
            sx={{
              height: "35px",
              color: "white",
              padding: "0px 12px",
              fontSize: "14px",
            }}
            disableUnderline
          />
        </Box>
        <IconButton onClick={() => {}}>
          <FilterListIcon
            sx={{
              color: "#0696a1",
              height: "20px",
              width: "20px",
            }}
          />
        </IconButton>
      </Box>
      <Box
        overflow="auto"
        height="90%"
        sx={{
          background: "#101b20",
        }}
      >
        {localChats.map((item:ChatCardType) => (
          <ChatCard {...item} />
        ))}
        <Box pt="50px"></Box>
      </Box>
    </Box>
  );
};
