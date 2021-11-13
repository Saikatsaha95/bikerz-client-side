import React, { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import login from "../../../images/login-img.jpg";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const { user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Your password did not change");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 15 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Signup
          </Typography>
          {!isLoading && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                type="text"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
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
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Retype Your Password"
                variant="standard"
                name="password2"
                onBlur={handleOnBlur}
                type="password"
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>

              <NavLink to="/login">
                <Button sx={{ m: 1 }} variant="text">
                  ALREADY REGISTERD? PLEASE LOGIN
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user.email && (
            <Alert severity="success">User created successully</Alert>
          )}

          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt=""></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
