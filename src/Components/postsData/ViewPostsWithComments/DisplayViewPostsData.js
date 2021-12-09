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
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
const DisplayViewPostsData = (props) => {
  const { arr, handleSubmit, deleteComment, comment, data, setData } = props;
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
          <Typography gutterBottom variant="h5" component="div">
            Comments
          </Typography>
          <TextField
            margin="normal"
            name="comment"
            label="enter comment"
            type="text"
            id="comment"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <IconButton onClick={() => handleSubmit(val["id"])}>
            <SendIcon
              style={{ color: "blue", width: 50, height: 50, marginTop: 10 }}
            />
          </IconButton>
        </Card>
      ))}
      <Card style={{ marginLeft: 200 }}>
        {comment.length > 0 ? (
          comment.map((val) => (
            <Card sx={{ maxWidth: 345 }} key={val.id}>
              {val["owner"] ? (
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
              ) : null}
              <CardContent>
                <Typography gutterBottom component="div">
                  {val.publishDate}
                </Typography>
                <Typography gutterBottom component="div">
                  {val.message}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => deleteComment(val["id"])}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))
        ) : (
          <div style={{ marginTop: 20 }}>No Comments</div>
        )}
      </Card>
    </div>
  );
};

export default DisplayViewPostsData;
