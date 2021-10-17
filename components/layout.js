import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./layout.module.css";
import Avatar from "@mui/material/Avatar";
import { ListItemButton, Stack } from "@mui/material";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import SortByAlphaOutlinedIcon from "@mui/icons-material/SortByAlphaOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HailOutlinedIcon from "@mui/icons-material/HailOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { useSharedData } from "../context";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ children }) {
  const state = useSharedData();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSwitchComponent = (index) => {
    state.setCurrentComponent(index);
  };

  const drawerList = [
    {
      text: "总览",
      icon: <AppsIcon />,
    },
    {
      text: "个人信息",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      text: "政治面貌",
      icon: <FlagOutlinedIcon />,
    },
    {
      text: "成绩查询",
      icon: <MenuBookOutlinedIcon />,
    },
    {
      text: "获奖情况",
      icon: <StarBorderOutlinedIcon />,
    },
    {
      text: "任职情况",
      icon: <HailOutlinedIcon />,
    },
    {
      text: "志愿服务",
      icon: <SentimentSatisfiedAltOutlinedIcon />,
    },
    {
      text: "语言考试",
      icon: <SortByAlphaOutlinedIcon />,
    },
    {
      text: "国际交流",
      icon: <FlightTakeoffOutlinedIcon />,
    },
    {
      text: "科研项目",
      icon: <ScienceOutlinedIcon />,
    },
    {
      text: "创新创业",
      icon: <AccountBalanceOutlinedIcon />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open} className={styles.appbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            樊恭烋荣誉学院学生成长信息系统
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="搜索"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <Avatar
            sx={{
              bgcolor: deepPurple[500],
              margin: "1rem 1rem 1rem 0",
              width: 60,
              height: 60,
            }}
          >
            DL
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack spacing={2} alignItems="flex-start">
              <Button variant="text" startIcon={<VpnKeyOutlinedIcon />}>
                修改密码
              </Button>
              <Button variant="text" startIcon={<LogoutOutlinedIcon />}>
                注销
              </Button>
            </Stack>
          </Box>
        </Box>
        <Divider />
        <List>
          {drawerList.map((item, index) => (
            <ListItemButton
              key={index}
              onClick={() => {
                handleSwitchComponent(index);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Main open={open}>{children}</Main>
    </Box>
  );
}
