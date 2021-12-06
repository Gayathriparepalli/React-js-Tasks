import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { DisplayCreatePost } from "./DisplayCreatePost";
const CreatePost = () => {
  const history = useHistory();
  const [state, setState] = useState({
    owner: "",
    tags: "",
    likes: "",
    text: "",
    image: "",
  });
  const { owner, tags, likes, text, image } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    axios
      .post(
        "https://dummyapi.io/data/v1/post/create",
        {
          text,
          image,
          likes,
          tags,
          owner,
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
      })
      .catch((err) => console.log(err));
    history.push("/posts");
  };
  return (
    <div>
      <DisplayCreatePost
        state={state}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreatePost;
