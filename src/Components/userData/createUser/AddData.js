import React, { useState } from "react";
import axios from "axios";
import DisplayAddData from "./DisplayAddData";
import { useHistory } from "react-router-dom";
const AddData = () => {
  const history = useHistory();
  const [state, setState] = useState({
    title: "",
    firstName: "",
    lastName: "",
    url: "",
    email: "",
  });

  const { title, firstName, lastName, url, email } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);

    await axios
      .post(
        "https://dummyapi.io/data/v1/user/create",
        {
          title,
          firstName,
          lastName,
          url,
          email,
        },
        {
          headers: {
            "app-id": "61ab14be3451350f187c1429",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("data added successfully");
        history.push("/dashboard");
      })
      .catch((err) =>
        console.log(
          'title must be "mr", "ms", "mrs", "miss", "dr", "" and email must be unique'
        )
      );
  };

  return (
    <div>
      <DisplayAddData
        state={state}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddData;
