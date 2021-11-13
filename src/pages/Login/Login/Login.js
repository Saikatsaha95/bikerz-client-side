import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login-img.jpg";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[field] = value;
    setLoginData(newLogInData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 15 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              variant="standard"
              name="password"
              onBlur={handleOnBlur}
              type="password"
            />
            <Button
              sx={{ width: "75%", mt: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>

          {isLoading && <CircularProgress />}
          {user.email && (
            <Alert sx={{ m: 1 }} severity="success">
              Login successully
            </Alert>
          )}

          {authError && (
            <Alert sx={{ m: 1 }} severity="error">
              {authError}
            </Alert>
          )}

          <p>------------------Or-----------------</p>
          <Button
            onClick={handleGoogleSignIn}
            sx={{ backgroundColor: "red", width: "75%", mb: 1 }}
            variant="contained"
          >
            Google Sign In
          </Button>

          <NavLink to="/register">
            <Button sx={{ m: 1 }} variant="text">
              NEW USER? PLEASE REGISTER
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt=""></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
