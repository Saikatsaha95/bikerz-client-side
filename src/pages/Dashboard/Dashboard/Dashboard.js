import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import MyOrder from "../MyOrders/MyOrder";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import profile from "../../../images/profile.png";
import AddReview from "../AddReview/AddReview";

import ManageProducts from "../ManageProducts/ManageProducts";

import Payment from "../Payment/Payment";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin, user, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img
        style={{ borderRadius: "50%", height: 50, width: 50, marginTop: 5 }}
        src={user.photoURL ? user.photoURL : profile}
        alt=""
      />
      <p style={{ marginBottom: -10 }}> Hello {user.displayName}</p>
      <Toolbar />
      <Divider />
      <NavLink to="/home">
        {" "}
        <Button color="inherit">Home</Button>{" "}
      </NavLink>
      <br />
      <NavLink to={`${url}`}>
        {" "}
        <Button color="inherit">Dashboard</Button>{" "}
      </NavLink>

      {admin && (
        <Box>
          <NavLink to={`${url}/manageAllOrders`}>
            {" "}
            <Button color="inherit">Manage All Orders</Button>{" "}
          </NavLink>
          <NavLink to={`${url}/manageProducts`}>
            {" "}
            <Button color="inherit">Manage Products</Button>{" "}
          </NavLink>

          <NavLink to={`${url}/makeAdmin`}>
            {" "}
            <Button color="inherit">Make Admin</Button>{" "}
          </NavLink>
          <NavLink to={`${url}/addProduct`}>
            {" "}
            <Button color="inherit">Add Product</Button>{" "}
          </NavLink>
        </Box>
      )}

      {!admin && (
        <NavLink to={`${url}/myOrders`}>
          {" "}
          <Button color="inherit">My Orders</Button>{" "}
        </NavLink>
      )}
      <br />

      {!admin && (
        <NavLink to={`${url}/payment`}>
          {" "}
          <Button color="inherit">Payment</Button>{" "}
        </NavLink>
      )}
      <br />

      {!admin && (
        <NavLink to={`${url}/addReview`}>
          {" "}
          <Button color="inherit">Add Review</Button>{" "}
        </NavLink>
      )}
      <br />

      <Button onClick={logOut} variant="contained">
        Logout
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={`${path}`}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>

          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
