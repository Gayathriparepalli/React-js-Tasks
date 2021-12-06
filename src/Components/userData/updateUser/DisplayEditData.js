import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const DisplayEditData = (props) => {
  const {
    firstName,
    lastName,
    title,
    picture,
    handleUpdate,
    setTitle,
    setFirstName,
    setLastName,
    setPicture,
  } = props;
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
            Update Data
          </Typography>
          <Box component="form" onSubmit={handleUpdate} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              type="text"
              id="title"
              label="enter title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setFirstName(e.target.value)}
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
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="url"
              label="enter image url"
              type="text"
              id="url"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              update
            </Button>{" "}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default DisplayEditData;
