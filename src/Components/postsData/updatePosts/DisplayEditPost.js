import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export const DisplayEditPost = (props) => {
  const {
    handleUpdate,
    image,
    likes,
    tags,
    text,
    setImage,
    setLikes,
    setTags,
    setText,
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
            Update Posts
          </Typography>
          <Box component="form" onSubmit={handleUpdate} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              type="text"
              id="tags"
              label="enter tags"
              name="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
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
              onChange={(e) => setLikes(e.target.value)}
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
              onChange={(e) => setText(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="url"
              label="enter image url"
              type="text"
              id="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
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
