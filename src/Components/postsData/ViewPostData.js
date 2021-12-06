import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ViewPostData = () => {
  let arr = [];
  arr.push(JSON.parse(localStorage.getItem("singlePost")));
  return (
    <div>
      {arr.map((val) => (
        <Card sx={{ maxWidth: 345 }} key={val.id} style={{ marginLeft: 200 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img
                  alt="data not found"
                  src={val.owner["picture"]}
                  style={{ height: 40, width: 40 }}
                />
              </Avatar>
            }
            title={`${val.owner["title"]} ${val.owner["firstName"]} ${val.owner["lastName"]}`}
          />
          <CardMedia component="img" image={val.image} alt="data not found" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Array.isArray(val.tags)
                ? val.tags.map((name) => name + ",")
                : val.tags}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Text:{val.text}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "red" }} />
              <Typography variant="body2" color="text.secondary">
                {val.likes}
              </Typography>
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
export default ViewPostData;
