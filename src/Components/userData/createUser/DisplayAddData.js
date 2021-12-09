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
const DisplayAddData = () => {
  const history = useHistory();
  var randomEmail = require("random-email");
  var email = randomEmail({ domain: "example.com" });
  const initialValues = {
    title: "",
    firstName: "",
    lastName: "",
    url: "",
    email: email,
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .oneOf(
        ["mr", "ms", "mrs", "miss", "dr"],
        "title must be one of 'mr', 'ms', 'mrs', 'miss', 'dr'"
      )
      .required("Required"),
    firstName: Yup.string()
      .min(2, "firstName is too short")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "firstName is too short")
      .required("Required"),
  });
  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post(
        "https://dummyapi.io/data/v1/user/create",

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
        toast.success("data added successfully");
        history.push("/dashboard");
      })
      .catch((err) => console.log(email + "email must be unique"));
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
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  type="text"
                  id="title"
                  label="enter title"
                  name="title"
                />
                <ErrorMessage name="title">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  name="firstName"
                  label="enter firstName"
                  type="text"
                  id="firstName"
                />
                <ErrorMessage name="firstName">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  name="lastName"
                  label="enter lastName"
                  type="text"
                  id="lastName"
                />
                <ErrorMessage name="lastName">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  name="url"
                  label="enter image url"
                  type="text"
                  id="url"
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
      </Container>
    </div>
  );
};
export default DisplayAddData;
