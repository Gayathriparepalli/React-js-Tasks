import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
export const DisplayCreatePost = () => {
  const history = useHistory();
  const randomId = JSON.parse(localStorage.getItem("randomPostsId"));
  const ownerId = randomId[0]["owner"]["id"];

  const initialValues = {
    text: "",
    image: "",
    likes: "",
    tags: "",
    owner: ownerId,
  };
  const validationSchema = Yup.object().shape({
    text: Yup.string()
      .min(6, " text is too short,minimum length of text must be 6")
      .required("Required"),
    likes: Yup.number().required("required"),
  });
  const handleSubmit = (values) => {
    console.log(values, ownerId);
    axios
      .post(
        "https://dummyapi.io/data/v1/post/create",
        values,

        {
          headers: {
            "app-id": "61ab14be3451350f187c1429",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("data added successfully");
        toast.success("post added successfully");
        history.push("/posts");
      })
      .catch((err) => console.log(err));
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
            Add Posts
          </Typography>
          <Box>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <Typography component="h1" variant="h5">
                    Posts data
                  </Typography>
                  <Field
                    as={TextField}
                    margin="normal"
                    fullWidth
                    type="text"
                    id="tags"
                    label="enter tags"
                    name="tags"
                  />
                  <Field
                    as={TextField}
                    margin="normal"
                    fullWidth
                    name="likes"
                    label="enter Likes"
                    type="number"
                    id="likes"
                  />
                  <ErrorMessage name="likes">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                  <Field
                    as={TextField}
                    margin="normal"
                    fullWidth
                    name="text"
                    label="enter text"
                    type="text"
                    id="text"
                  />
                  <ErrorMessage name="text">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                  <Field
                    as={TextField}
                    margin="normal"
                    fullWidth
                    name="image"
                    label="enter image url"
                    type="text"
                    id="image"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
