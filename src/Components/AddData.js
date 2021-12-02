import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
const AddData = () => {
  const [state, setState] = useState({
    title: "",
    firstName: "",
    lastName: "",
    url: "",
    email: "",
  });
  const history = useHistory();
  const { title, firstName, lastName, url, email } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);

    await axios
      .post(
        "https://dummyapi.io/data/v1/user/create",
        {
          title,
          firstName,
          lastName,
          url,
          email,
        },
        {
          headers: {
            "app-id": "61a740465e6d06db1da70941",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("data added successfully");
      })
      .catch((err) => console.log("enter unique details"));
    history.push("/dashboard");
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Data
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              required
              type="text"
              id="title"
              label="enter title"
              name="title"
              value={title}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="enter firstName"
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="enter lastName"
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              fullWidth
              name="url"
              label="enter image url"
              type="text"
              id="url"
              value={url}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="enter email"
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              submit
            </Button>{" "}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AddData;
