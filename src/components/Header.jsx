import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from '@mui/material/Avatar';
import ProfilePicture from '/profile.png'; 
const pages = ["Products", "Pricing", "Blog"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent" }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1 }}>
          <img src="./logo.png" alt="logo" />
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" },mr:1 }}>
          <TextField
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
              sx: {
                borderRadius: "30px",
                backgroundColor: "#f2f2f2",
                height: "45px",
                width: "200px",
              },
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <Button
            sx={{
              height: 45,
              width:"150px",
              borderRadius: "30px",
              backgroundColor: "#e7ad99",
              color: 'white',
              '&:hover': {
                backgroundColor: '#eb8765',
              },
              paddingLeft:0,
              mr:1
            }}
          >
            <Avatar alt="User" src={ProfilePicture} sx={{ marginRight:1 }} />
              User Name
          </Button>

          <Button
            sx={{
              height: 45,
              width:"150px",
              color: 'white',
              backgroundColor: '#e7ad99',
              borderRadius: '30px',
              border: '2px solid white',
              '&:hover': {
                backgroundColor: '#eb8765',
           
              },
            }}
          >
            Logout
          
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
