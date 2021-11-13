import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut, admin } = useAuth();
  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ mr: "auto" }}>
            BIKERZ
          </Typography>
          <NavLink to="/">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/allbikes">
            <Button color="inherit">All Bikes</Button>
          </NavLink>
          {user?.email ? (
            <Box>
              <NavLink to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button onClick={logOut} color="inherit">
                Logout
              </Button>
              <span>
                {user.displayName} {admin ? "(admin)" : ""}
              </span>
            </Box>
          ) : (
            <NavLink to="/login">
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
