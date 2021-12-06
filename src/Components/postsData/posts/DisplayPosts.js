import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useHistory } from "react-router-dom";
const DisplayPosts = (props) => {
  const { posts, deletePost, updatePosts, view } = props;
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => history.push("/createPosts")}
        className="btn btn-primary"
      >
        Create Post
      </button>
      <Grid>
        <Paper
          style={{
            marginLeft: 100,
            marginRight: 100,
            padding: 50,
          }}
        >
          {posts.map((val, index) => {
            if (index === 0) {
              return (
                <b key={val.id}>
                  <h2 style={{ color: "purple" }}>
                    Posts by {val.owner.firstName} {val.owner.lastName}
                  </h2>
                </b>
              );
            } else {
              return null;
            }
          })}
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            {posts.map((val) => (
              <Grid xs={4} sm={4} item key={val.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={val.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {Array.isArray(val.tags)
                        ? val.tags.map((name) => name + ",")
                        : val.tags}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.text}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon style={{ color: "red" }} />
                      <Typography variant="body2" color="text.secondary">
                        {val.likes}
                      </Typography>
                    </IconButton>
                    <IconButton onClick={() => updatePosts(val)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deletePost(val.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => view(val.id)}>
                      <VisibilityIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default DisplayPosts;
