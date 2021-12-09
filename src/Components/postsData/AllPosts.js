import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

import axios from "axios";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setPosts(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllPosts;
