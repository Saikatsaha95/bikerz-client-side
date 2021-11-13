import { Alert, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    axios
      .put("https://warm-lake-37627.herokuapp.com/users/admin", user)
      .then((res) => {
        if (res.data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={handleAdminSubmit}
      >
        <TextField
          sx={{ width: "50%" }}
          id="outlined-basic"
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <Button sx={{ m: 1 }} type="submit" variant="contained">
          Make Admin
        </Button>
      </form>

      {success && <Alert severity="success">Made Admin Successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
