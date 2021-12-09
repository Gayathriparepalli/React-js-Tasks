import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Grid } from "@material-ui/core";
const ViewComments = () => {
  const commentsid = localStorage.getItem("commentsId");
  const [comment, setComment] = useState([]);
  const getData = () => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${commentsid}/comment`, {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setComment(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={3} style={{ marginTop: 20, marginLeft: 0 }}>
        {comment.length > 0 ? (
          comment.map((val) => (
            <Grid item key={val.id}>
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
              </Card>
            </Grid>
          ))
        ) : (
          <div style={{ marginTop: 20 }}>Loading...</div>
        )}
      </Grid>
    </div>
  );
};

export default ViewComments;
