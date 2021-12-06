import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export const DisplayCreatePost = (props) => {
  const { state, handleInputChange, handleSubmit } = props;
  const { owner, tags, likes, text, image } = state;
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
            Add Posts
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <Typography component="h1" variant="h5">
              Users Data
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              name="owner"
              label="enter owner id"
              type="text"
              id="owner"
              value={owner}
              onChange={handleInputChange}
            />
            <Typography component="h1" variant="h5">
              Posts data
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              required
              type="text"
              id="tags"
              label="enter tags"
              name="tags"
              value={tags}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="likes"
              label="enter Likes"
              type="number"
              id="likes"
              value={likes}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="text"
              label="enter text"
              type="text"
              id="text"
              value={text}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              fullWidth
              name="image"
              label="enter image url"
              type="text"
              id="image"
              value={image}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              submit
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
